
/**
 * Class to handle parsing a byte array similar to Java's implementation that 
 * tracks the read index and incrementing per read instruction
 */
export class ForzaByteBuffer {
  private tag: string = 'ForzaByteBuffer';
  private buffer: DataView;
  private offset: number = 0;
  constructor(buffer: ArrayBuffer) {
    this.buffer = new DataView(buffer);
    this.buffer.getInt16;
  }
  getByte() {
    if(this.offset >= this.buffer.byteLength) {
      console.warn(`${this.tag} :: OFFSET ${this.offset} OUT-OF-BOUND ON STREAM LENGTH ${this.buffer.byteLength} !!! RETURNING 0 !!!!`);
      return 0;
    }
    const val = this.buffer.getInt8(this.offset);
    this.offset += 1;
    return val;
  }
  getInt() {
    if(this.offset >= this.buffer.byteLength) {
      console.warn(`${this.tag} :: OFFSET ${this.offset} OUT-OF-BOUND ON STREAM LENGTH ${this.buffer.byteLength} !!! RETURNING 0 !!!!`);
      return 0;
    }
    const val = this.buffer.getUint32(this.offset, true);
    this.offset += 4;
    return val;
  }
  getLong() {
    if(this.offset >= this.buffer.byteLength) {
      console.warn(`${this.tag} :: OFFSET ${this.offset} OUT-OF-BOUND ON STREAM LENGTH ${this.buffer.byteLength} !!! RETURNING 0 !!!!`);
      return 0;
    }
    const val = this.buffer.getUint32(this.offset, true);
    this.offset += 4;
    return val;
  }
  getShort() {
    if(this.offset >= this.buffer.byteLength) {
      console.warn(`${this.tag} :: OFFSET ${this.offset} OUT-OF-BOUND ON STREAM LENGTH ${this.buffer.byteLength} !!! RETURNING 0 !!!!`);
      return 0;
    }
    const val = this.buffer.getUint16(this.offset, true);
    this.offset += 2;
    return val;
  }
  getFloat() {
    if(this.offset >= this.buffer.byteLength) {
      console.warn(`${this.tag} :: OFFSET ${this.offset} OUT-OF-BOUND ON STREAM LENGTH ${this.buffer.byteLength} !!! RETURNING 0 !!!!`);
      return 0;
    }
    const val = this.buffer.getFloat32(this.offset, true);
    this.offset += 4;
    return val;
  }
}
