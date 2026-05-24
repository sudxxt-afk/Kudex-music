/**
 * Декоратор (обертка) для логирования вызова функций с типизированными аргументами.
 * Используется для логирования смены тем и языка без загрязнения основной логики.
 */
export function logAction<Args extends unknown[], ReturnVal>(
  actionName: string,
  fn: (...args: Args) => ReturnVal
): (...args: Args) => ReturnVal {
  return (...args: Args): ReturnVal => {
    console.info(`[Kudex Logger] ${actionName}:`, args[0]);
    return fn(...args);
  };
}
