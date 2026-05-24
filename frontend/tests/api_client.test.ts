import axios from 'axios';
import { apiClient } from '../src/api/client';
import MockAdapter from 'axios-mock-adapter';

describe('API Client Retry Logic', () => {
  let mock: MockAdapter;
  let mockGlobal: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(apiClient);
    mockGlobal = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
    mockGlobal.reset();
    localStorage.clear();
  });

  afterAll(() => {
    mock.restore();
    mockGlobal.restore();
  });

  it('retries original request after 401 using refresh token', async () => {
    localStorage.setItem('kudex_access_token', 'old_access');
    localStorage.setItem('kudex_refresh_token', 'valid_refresh');

    mock.onGet('/api/v1/test').replyOnce(401);
    
    mockGlobal.onPost('/auth/refresh').reply(200, {
      access_token: 'new_access',
      refresh_token: 'new_refresh'
    });

    mock.onGet('/api/v1/test').replyOnce(200, { success: true });

    const response = await apiClient.get('/api/v1/test');
    
    expect(response.status).toBe(200);
    expect(response.data.success).toBe(true);
    expect(localStorage.getItem('kudex_access_token')).toBe('new_access');
  });

  it('fails and logs out if refresh token fails', async () => {
    localStorage.setItem('kudex_access_token', 'old_access');
    localStorage.setItem('kudex_refresh_token', 'invalid_refresh');

    mock.onGet('/api/v1/test').replyOnce(401);
    mockGlobal.onPost('/auth/refresh').reply(401);

    await expect(apiClient.get('/api/v1/test')).rejects.toThrow();
    
    expect(localStorage.getItem('kudex_access_token')).toBeNull();
  });
});
