import { ForzaByteBuffer } from "./ByteBuffer.js";
import { FM8_CarLookup } from "./FM8_carList.js";
import { FM8_trackList } from "./FM8_trackList.js";
import { Log } from "./Log.js";
import { getDefaultTelemetryData, ITelemetryData } from "./TelemetryData.js";
import { Drivetrain, CarClass, PacketLengths, GameType } from "./types.js";

export class ForzaTelemetryApi {
  private static TAG: string = "ForzaTelemetryApi";
  private static Log: Log;

  static parseData(buffLen: number, rawBuffer: Buffer): ITelemetryData {
    const data = getDefaultTelemetryData();
    const buffer = new ForzaByteBuffer(rawBuffer);
    data.byteLength = buffLen;
    data.gameType = data.byteLength == PacketLengths.HORIZON
      ? GameType.HORIZON
      : data.byteLength == PacketLengths.MOTORSPORT_7
        ? GameType.MOTORSPORT_7
        : data.byteLength == PacketLengths.MOTORSPORT_8
          ? GameType.MOTORSPORT_8
          : GameType.UNKNOWN;
    data.isRaceOn = buffer.getInt() == 1;
    data.timeStampMS = buffer.getLong();
    data.rpmData.max = buffer.getFloat();
    data.rpmData.idle = buffer.getFloat();
    data.rpmData.current = buffer.getFloat();
    data.acceleration.x = buffer.getFloat() * 100;
    data.acceleration.y = buffer.getFloat() * 100;
    data.acceleration.z = buffer.getFloat() * 100;
    data.velocity.x = buffer.getFloat() * 100;
    data.velocity.y = buffer.getFloat() * 100;
    data.velocity.z = buffer.getFloat() * 100;
    data.angularVelocity.x = buffer.getFloat() * 100;
    data.angularVelocity.y = buffer.getFloat() * 100;
    data.angularVelocity.z = buffer.getFloat() * 100;
    data.yaw = buffer.getFloat() * 100;
    data.pitch = buffer.getFloat() * 100;
    data.roll = buffer.getFloat() * 100;
    data.normalizedSuspensionTravel.leftFront = buffer.getFloat() * 100;
    data.normalizedSuspensionTravel.rightFront = buffer.getFloat() * 100;
    data.normalizedSuspensionTravel.leftRear = buffer.getFloat() * 100;
    data.normalizedSuspensionTravel.rightRear = buffer.getFloat() * 100;
    data.tireSlipRatio.leftFront = buffer.getFloat() * 100;
    data.tireSlipRatio.rightFront = buffer.getFloat() * 100;
    data.tireSlipRatio.leftRear = buffer.getFloat() * 100;
    data.tireSlipRatio.rightRear = buffer.getFloat() * 100;
    data.wheelRotationSpeed.leftFront = buffer.getFloat() * 100;
    data.wheelRotationSpeed.rightFront = buffer.getFloat() * 100;
    data.wheelRotationSpeed.leftRear = buffer.getFloat() * 100;
    data.wheelRotationSpeed.rightRear = buffer.getFloat() * 100;
    data.wheelOnRumbleStrip.leftFront = buffer.getInt();
    data.wheelOnRumbleStrip.rightFront = buffer.getInt();
    data.wheelOnRumbleStrip.leftRear = buffer.getInt();
    data.wheelOnRumbleStrip.rightRear = buffer.getInt();
    data.wheelInPuddleDepth.leftFront = buffer.getFloat();
    data.wheelInPuddleDepth.rightFront = buffer.getFloat();
    data.wheelInPuddleDepth.leftRear = buffer.getFloat();
    data.wheelInPuddleDepth.rightRear = buffer.getFloat();
    data.surfaceRumble.leftFront = buffer.getFloat();
    data.surfaceRumble.rightFront = buffer.getFloat();
    data.surfaceRumble.leftRear = buffer.getFloat();
    data.surfaceRumble.rightRear = buffer.getFloat();
    data.tireSlipAngle.leftFront = buffer.getFloat();
    data.tireSlipAngle.rightFront = buffer.getFloat();
    data.tireSlipAngle.leftRear = buffer.getFloat();
    data.tireSlipAngle.rightRear = buffer.getFloat();
    data.tireCombinedSlip.leftFront = buffer.getFloat() * 100;
    data.tireCombinedSlip.rightFront = buffer.getFloat() * 100;
    data.tireCombinedSlip.leftRear = buffer.getFloat() * 100;
    data.tireCombinedSlip.rightRear = buffer.getFloat() * 100;
    data.suspensionTravelMeters.leftFront = buffer.getFloat() * 100;
    data.suspensionTravelMeters.rightFront = buffer.getFloat() * 100;
    data.suspensionTravelMeters.leftRear = buffer.getFloat() * 100;
    data.suspensionTravelMeters.rightRear = buffer.getFloat() * 100;
    data.carInfo.ordinalId = buffer.getInt();
    data.carInfo.class = this.toCarClass(buffer.getInt(), data.gameType);
    data.carInfo.performanceIndex = buffer.getInt();
    data.carInfo.drivetrainType = this.toDrivetrain(buffer.getInt());
    data.carInfo.numberOfCylinders = buffer.getInt();
    if (data.gameType == GameType.HORIZON) {
      data.carInfo.carType = ForzaTelemetryApi.toCarType(buffer.getInt());
      data.objectHit = buffer.getLong();
    } else {
      data.carInfo.carType = 'Not Available';
      data.objectHit = 0;
    }
    data.position.x = buffer.getFloat() * 100;
    data.position.y = buffer.getFloat() * 100;
    data.position.z = buffer.getFloat() * 100;
    data.speed = buffer.getFloat();
    data.power = buffer.getFloat();
    data.torque = buffer.getFloat();
    data.tireTemp.leftFront = buffer.getFloat();
    data.tireTemp.rightFront = buffer.getFloat();
    data.tireTemp.leftRear = buffer.getFloat();
    data.tireTemp.rightRear = buffer.getFloat();
    data.boost = buffer.getFloat();
    data.fuel = Math.floor(buffer.getFloat() * 100);
    data.distanceTraveled = buffer.getFloat();
    data.bestLap = buffer.getFloat();
    data.lastLap = buffer.getFloat();
    data.currentLap = buffer.getFloat();
    data.currentRaceTime = buffer.getFloat();
    data.lapNumber = buffer.getShort();
    data.racePosition = buffer.getByte();
    data.throttle = (buffer.getByte() & 0xff) * 100 / 255;
    data.brake = (buffer.getByte() & 0xff) * 100 / 255;
    data.clutch = (buffer.getByte() & 0xff) * 100 / 255;
    data.handbrake = (buffer.getByte() & 0xff) * 100 / 255;
    data.gear = (buffer.getByte() & 0xff);
    data.steer = (buffer.getByte());
    data.normalizedDrivingLine = (buffer.getByte());
    // TODO - test this
    data.isOnTrack = data.normalizedDrivingLine < 100 || data.normalizedDrivingLine > 101.6
    data.normalizedAIBrakeDifference = (buffer.getByte());
    if (data.gameType == GameType.MOTORSPORT_8) {
      data.tireWear.leftFront = buffer.getFloat() * 100;
      data.tireWear.rightFront = buffer.getFloat() * 100;
      data.tireWear.leftRear = buffer.getFloat() * 100;
      data.tireWear.rightRear = buffer.getFloat() * 100;
      data.trackId = buffer.getInt();
    } else {
      data.tireWear.leftFront = 0;
      data.tireWear.rightFront = 0;
      data.tireWear.leftRear = 0;
      data.tireWear.rightRear = 0;
    }
    return data;
  }
  static Motorsport_8_trackInfo(id: number) {
    return FM8_trackList.getTrackInfo(id);
  }
  static Motorsport_8_carInfo(id: number) {
    return FM8_CarLookup.getCarInfo(id);
  }
  static toCelsius(value: number) {
    return ((value - 32) * 5) / 9;
  }
  static getSpeedInKPH(speed: number): number {
    return speed * 3.6;
  }
  static getSpeedInMPH(speed: number): number {
    return speed * 2.23694;
  }
  static getHorsepower(power: number): number {
    return power * 0.00134102;
  }
  static toDrivetrain(value: number) {
    switch (value) {
      case 0: return Drivetrain.FWD;
      case 1: return Drivetrain.RWD;
      case 2: return Drivetrain.AWD;
    }
    return Drivetrain.FWD;
  }
  static toCarClass(value: number, gameType: GameType) {
    switch (value) {
      case 0: return (gameType != GameType.HORIZON)
        ? CarClass.E
        : CarClass.D;
      case 1: return (gameType != GameType.HORIZON)
        ? CarClass.D
        : CarClass.C;
      case 2: return (gameType != GameType.HORIZON)
        ? CarClass.C
        : CarClass.B;
      case 3: return (gameType != GameType.HORIZON)
        ? CarClass.B
        : CarClass.A;
      case 4: return (gameType != GameType.HORIZON)
        ? CarClass.A
        : CarClass.S;
      case 5: return (gameType != GameType.HORIZON)
        ? CarClass.S
        : CarClass.S1;
      case 6: return (gameType != GameType.HORIZON)
        ? CarClass.R
        : CarClass.S2;
      case 7: return CarClass.P
    }
    return CarClass.X
  }
  static toCarType(value: number) {
    let result = "Unknown (" + value + ")";
    switch (value) {
      case 11:
        result = "Modern Super Cars";
        break;
      case 12:
        result = "Retro Super Cars";
        break;
      case 13:
        result = "Hyper Cars";
        break;
      case 14:
        result = "Retro Saloons";
        break;
      case 16:
        result = "Vans & Utility";
        break;
      case 17:
        result = "Retro Sports Cars";
        break;
      case 18:
        result = "Modern Sports Cars";
        break;
      case 19:
        result = "Super Saloons";
        break;
      case 20:
        result = "Classic Racers";
        break;
      case 21:
        result = "Cult Cars";
        break;
      case 22:
        result = "Rare Classics";
        break;
      case 25:
        result = "Super Hot Hatch";
        break;
      case 29:
        result = "Rods & Customs";
        break;
      case 30:
        result = "Retro Muscle";
        break;
      case 31:
        result = "Modern Muscle";
        break;
      case 32:
        result = "Retro Rally";
        break;
      case 33:
        result = "Classic Rally";
        break;
      case 34:
        result = "Rally Monsters";
        break;
      case 35:
        result = "Modern Rally";
        break;
      case 36:
        result = "GT Cars";
        break;
      case 37:
        result = "Super GT";
        break;
      case 38:
        result = "Extreme Offroad";
        break;
      case 39:
        result = "Sports Utility Heroes";
        break;
      case 40:
        result = "Offroad";
        break;
      case 41:
        result = "Offroad Buggies";
        break;
      case 42:
        result = "Classic Sports Cars";
        break;
      case 43:
        result = "Track Toys";
        break;
      case 44:
        result = "Vintage Racers";
        break;
      case 45:
        result = "Trucks";
        break;
    }
    return result;
  }
}