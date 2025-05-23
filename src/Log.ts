
/**
 * Class to act as logger
 */
export class Log {
  static e(tag: string, msg: string) {
    console.error(Log.formatString(tag, msg));
  }
  static d(tag: string, msg: string) {
    console.debug(Log.formatString(tag, msg));
  }
  static w(tag: string, msg: string) {
    console.warn(Log.formatString(tag, msg));
  }
  static l(tag: string, msg: string) {
    console.log(Log.formatString(tag, msg))
  }
  private static formatString(tag: string, msg: string) {
    return `${tag} :: ${msg}`;
  }
}
