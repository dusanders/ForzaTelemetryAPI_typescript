
/**
 * Class to act as logger
 */
export class Log {
  e(tag: string, msg: string) {
    console.error(this.formatString(tag, msg));
  }
  d(tag: string, msg: string) {
    console.debug(this.formatString(tag, msg));
  }
  w(tag: string, msg: string) {
    console.warn(this.formatString(tag, msg));
  }
  l(tag: string, msg: string) {
    console.log(this.formatString(tag, msg))
  }
  private formatString(tag: string, msg: string) {
    return `${tag} :: ${msg}`;
  }
}
