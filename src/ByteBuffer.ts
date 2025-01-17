
/**
 * Class to handle parsing a byte array similar to Java's implementation that 
 * tracks the read index and incrementing per read instruction
 */
export class ForzaByteBuffer {
  private buffer: Buffer;
  private offset: number = 0;
  constructor(buffer: Buffer) {
    this.buffer = buffer;
  }
  getByte() {
    const val = this.buffer.readInt8(this.offset);
    this.offset += 1;
    return val;
  }
  getInt() {
    const val = this.buffer.readUInt32LE(this.offset);
    this.offset += 4;
    return val;
  }
  getLong() {
    const val = this.buffer.readUint32LE(this.offset);
    this.offset += 4;
    return val;
  }
  getShort() {
    const val = this.buffer.readUInt16LE(this.offset);
    this.offset += 2;
    return val;
  }
  getFloat() {
    const val = this.buffer.readFloatLE(this.offset);
    this.offset += 4;
    return val;
  }
}
