import { Log } from "./Log";

/**
 * Class to handle parsing a byte array similar to Java's implementation that 
 * tracks the read index and incrementing per read instruction
 */
export class ForzaByteBuffer {
  private tag: string = 'ForzaByteBuffer';
  private buffer: DataView;
  private offset: number = 0;
  constructor(buffer: Buffer) {
    this.buffer = new DataView(buffer.buffer);
  }
  getByte() {
    try {
      if (this.offset >= this.buffer.byteLength) {
        Log.w(this.tag, `OFFSET ${this.offset} OUT-OF-BOUND ON STREAM LENGTH ${this.buffer.byteLength} !!! RETURNING 0 !!!!`);
        return 0;
      }
      const val = this.buffer.getInt8(this.offset);
      this.offset += 1;
      return val;
    } catch (error: Error | unknown) {
      throw new Error('Failed to parse byte');
    }
  }
  getInt() {
    try {
      if (this.offset >= this.buffer.byteLength) {
        console.warn(this.tag, `OFFSET ${this.offset} OUT-OF-BOUND ON STREAM LENGTH ${this.buffer.byteLength} !!! RETURNING 0 !!!!`);
        return 0;
      }
      const val = this.buffer.getUint32(this.offset, true);
      this.offset += 4;
      return val;
    } catch (error: unknown) {
      throw new Error(`Failed to parse Int`);
    }
  }
  getLong() {
    try {
      if (this.offset >= this.buffer.byteLength) {
        console.warn(this.tag, `OFFSET ${this.offset} OUT-OF-BOUND ON STREAM LENGTH ${this.buffer.byteLength} !!! RETURNING 0 !!!!`);
        return 0;
      }
      const val = this.buffer.getUint32(this.offset, true);
      this.offset += 4;
      return val;
    } catch (error: unknown) {
      throw new Error(`Failed to parse Long`);
    }
  }
  getShort() {
    try {
      if (this.offset >= this.buffer.byteLength) {
        console.warn(this.tag, `OFFSET ${this.offset} OUT-OF-BOUND ON STREAM LENGTH ${this.buffer.byteLength} !!! RETURNING 0 !!!!`);
        return 0;
      }
      const val = this.buffer.getUint16(this.offset, true);
      this.offset += 2;
      return val;
    } catch (error: unknown) {
      throw new Error(`Failed to parse Short`);
    }
  }
  getFloat() {
    try {
      if (this.offset >= this.buffer.byteLength) {
        console.warn(this.tag, `OFFSET ${this.offset} OUT-OF-BOUND ON STREAM LENGTH ${this.buffer.byteLength} !!! RETURNING 0 !!!!`);
        return 0;
      }
      const val = this.buffer.getFloat32(this.offset, true);
      this.offset += 4;
      return val;
    } catch (error) {
      throw new Error(`Failed to parse Float`);
    }
  }
}
