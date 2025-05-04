import { RpmData, DirectionalData, TireData, CarInfo, GameType } from "./types";

export function getDefaultTelemetryData(): ITelemetryData {
  return {
    byteLength: 331,
    gameType: GameType.UNKNOWN,
    isRaceOn: false,
    isOnTrack: false,
    timeStampMS: 0,
    rpmData: {
      max: 0,
      current: 0,
      idle: 0
    },
    acceleration: {
      x: 0, y: 0, z: 0
    },
    velocity: {
      x: 0, y: 0, z: 0
    },
    angularVelocity: {
      x: 0, y: 0, z: 0
    },
    yaw: 0,
    pitch: 0,
    roll: 0,
    normalizedSuspensionTravel: {
      leftFront: 0,
      leftRear: 0,
      rightFront: 0,
      rightRear: 0
    },
    tireSlipRatio: {
      leftFront: 0,
      leftRear: 0,
      rightFront: 0,
      rightRear: 0
    },
    wheelRotationSpeed: {
      leftFront: 0,
      leftRear: 0,
      rightFront: 0,
      rightRear: 0
    },
    wheelOnRumbleStrip: {
      leftFront: 0,
      leftRear: 0,
      rightFront: 0,
      rightRear: 0
    },
    wheelInPuddleDepth: {
      leftFront: 0,
      leftRear: 0,
      rightFront: 0,
      rightRear: 0
    },
    surfaceRumble: {
      leftFront: 0,
      leftRear: 0,
      rightFront: 0,
      rightRear: 0
    },
    tireSlipAngle: {
      leftFront: 0,
      leftRear: 0,
      rightFront: 0,
      rightRear: 0
    },
    tireCombinedSlip: {
      leftFront: 0,
      leftRear: 0,
      rightFront: 0,
      rightRear: 0
    },
    suspensionTravelMeters: {
      leftFront: 0,
      leftRear: 0,
      rightFront: 0,
      rightRear: 0
    },
    carInfo: {
      ordinalId: 0,
      carType: '',
      class: 0,
      numberOfCylinders: 0,
      performanceIndex: 0,
      drivetrainType: 0
    },
    objectHit: 0,
    position: {
      x: 0, y: 0, z: 0
    },
    speed: 0,
    power: 0,
    torque: 0,
    tireTemp: {
      leftFront: 0,
      leftRear: 0,
      rightFront: 0,
      rightRear: 0
    },
    boost: 0,
    fuel: 0,
    distanceTraveled: 0,
    bestLap: 0,
    lastLap: 0,
    currentLap: 0,
    currentRaceTime: 0,
    lapNumber: 0,
    racePosition: 0,
    throttle: 0,
    brake: 0,
    clutch: 0,
    handbrake: 0,
    gear: 0,
    steer: 0,
    normalizedDrivingLine: 0,
    normalizedAIBrakeDifference: 0,
    tireWear: {
      leftFront: 0,
      leftRear: 0,
      rightFront: 0,
      rightRear: 0
    },
    trackId: 0
  };
}
export function getRandomTelemetryData(): ITelemetryData {
  const data = getDefaultTelemetryData();
  data.isRaceOn = Math.random() > 0.5;
  data.isOnTrack = Math.random() > 0.5;
  data.timeStampMS = Date.now();
  data.rpmData.current = Math.floor(Math.random() * 8000);
  data.rpmData.max = 8000;
  data.rpmData.idle = 1000;
  data.acceleration.x = Math.random() * 10 - 5;
  data.acceleration.y = Math.random() * 10 - 5;
  data.acceleration.z = Math.random() * 10 - 5;
  data.velocity.x = Math.random() * 100;
  data.velocity.y = Math.random() * 100;
  data.velocity.z = Math.random() * 100;
  data.angularVelocity.x = Math.random() * 10 - 5;
  data.angularVelocity.y = Math.random() * 10 - 5;
  data.angularVelocity.z = Math.random() * 10 - 5;
  data.yaw = Math.random() * 360;
  data.pitch = Math.random() * 360;
  data.roll = Math.random() * 360;
  data.normalizedSuspensionTravel.leftFront = Math.random();
  data.normalizedSuspensionTravel.leftRear = Math.random();
  data.normalizedSuspensionTravel.rightFront = Math.random();
  data.normalizedSuspensionTravel.rightRear = Math.random();
  data.tireSlipRatio.leftFront = Math.random();
  data.tireSlipRatio.leftRear = Math.random();
  data.tireSlipRatio.rightFront = Math.random();
  data.tireSlipRatio.rightRear = Math.random();
  data.wheelRotationSpeed.leftFront = Math.random() * 100;
  data.wheelRotationSpeed.leftRear = Math.random() * 100;
  data.wheelRotationSpeed.rightFront = Math.random() * 100;
  data.wheelRotationSpeed.rightRear = Math.random() * 100;
  data.wheelOnRumbleStrip.leftFront = Math.random() > 0.5 ? 1 : 0;
  data.wheelOnRumbleStrip.leftRear = Math.random() > 0.5 ? 1 : 0;
  data.wheelOnRumbleStrip.rightFront = Math.random() > 0.5 ? 1 : 0;
  data.wheelOnRumbleStrip.rightRear = Math.random() > 0.5 ? 1 : 0;
  data.wheelInPuddleDepth.leftFront = Math.random();
  data.wheelInPuddleDepth.leftRear = Math.random();
  data.wheelInPuddleDepth.rightFront = Math.random();
  data.wheelInPuddleDepth.rightRear = Math.random();
  data.surfaceRumble.leftFront = Math.random();
  data.surfaceRumble.leftRear = Math.random();
  data.surfaceRumble.rightFront = Math.random();
  data.surfaceRumble.rightRear = Math.random();
  data.tireSlipAngle.leftFront = Math.random() * 10;
  data.tireSlipAngle.leftRear = Math.random() * 10;
  data.tireSlipAngle.rightFront = Math.random() * 10;
  data.tireSlipAngle.rightRear = Math.random() * 10;
  data.tireCombinedSlip.leftFront = Math.random();
  data.tireCombinedSlip.leftRear = Math.random();
  data.tireCombinedSlip.rightFront = Math.random();
  data.tireCombinedSlip.rightRear = Math.random();
  data.suspensionTravelMeters.leftFront = Math.random();
  data.suspensionTravelMeters.leftRear = Math.random();
  data.suspensionTravelMeters.rightFront = Math.random();
  data.suspensionTravelMeters.rightRear = Math.random();
  data.carInfo.ordinalId = Math.floor(Math.random() * 1000);
  data.carInfo.carType = "RandomCar";
  data.carInfo.class = Math.floor(Math.random() * 10);
  data.carInfo.numberOfCylinders = Math.floor(Math.random() * 12);
  data.carInfo.performanceIndex = Math.floor(Math.random() * 1000);
  data.carInfo.drivetrainType = Math.floor(Math.random() * 3);
  data.objectHit = Math.floor(Math.random() * 10);
  data.position.x = Math.random() * 1000;
  data.position.y = Math.random() * 1000;
  data.position.z = Math.random() * 1000;
  data.speed = Math.random() * 300;
  data.power = Math.random() * 11000;
  data.torque = Math.random() * 1000;
  data.tireTemp.leftFront = Math.random() * 100;
  data.tireTemp.leftRear = Math.random() * 100;
  data.tireTemp.rightFront = Math.random() * 100;
  data.tireTemp.rightRear = Math.random() * 100;
  data.boost = Math.random() * 2;
  data.fuel = Math.random() * 100;
  data.distanceTraveled = Math.random() * 10000;
  data.bestLap = Math.random() * 300;
  data.lastLap = Math.random() * 300;
  data.currentLap = Math.random() * 300;
  data.currentRaceTime = Math.random() * 10000;
  data.lapNumber = Math.floor(Math.random() * 100);
  data.racePosition = Math.floor(Math.random() * 20);
  data.throttle = Math.random();
  data.brake = Math.random();
  data.clutch = Math.random();
  data.handbrake = Math.random();
  data.gear = Math.floor(Math.random() * 6);
  data.steer = Math.random() * 200;
  data.normalizedDrivingLine = Math.random() * 200;
  data.normalizedAIBrakeDifference = Math.random() * 200;
  data.tireWear.leftFront = Math.random();
  data.tireWear.leftRear = Math.random();
  data.tireWear.rightFront = Math.random();
  data.tireWear.rightRear = Math.random();
  data.trackId = 5;
  return data;
}
export interface ITelemetryData {
  //#region Data Props 
  byteLength: number;
  gameType: GameType;
  isRaceOn: boolean;
  isOnTrack: boolean;
  timeStampMS: number;
  rpmData: RpmData;
  acceleration: DirectionalData;
  velocity: DirectionalData;
  angularVelocity: DirectionalData;
  yaw: number;
  pitch: number;
  roll: number;
  normalizedSuspensionTravel: TireData;
  tireSlipRatio: TireData;
  wheelRotationSpeed: TireData;
  wheelOnRumbleStrip: TireData;
  wheelInPuddleDepth: TireData;
  surfaceRumble: TireData;
  tireSlipAngle: TireData;
  tireCombinedSlip: TireData;
  suspensionTravelMeters: TireData;
  carInfo: CarInfo;
  objectHit: number;
  /**
   * Position of the car within the world.
   * y values indicate elevation.
   * To make a 2D top-down view of the track:
   * x values would be x values - z values would be 
   * considered y points
   */
  position: DirectionalData;
  speed: number;
  power: number;
  torque: number;
  tireTemp: TireData;
  boost: number;
  fuel: number;
  distanceTraveled: number;
  bestLap: number;
  lastLap: number;
  currentLap: number;
  currentRaceTime: number;
  lapNumber: number;
  racePosition: number;
  throttle: number;
  brake: number;
  clutch: number;
  handbrake: number;
  gear: number;
  /**
   * Normalized value between 0 and 200
   * 101.55 is center steering
   * 0-101 is left steering
   * 200-101 is right steering
   */
  steer: number;
  /**
   * This gives the position on track. 0 being center track,
   * 0 - 99 deviation from center to the left
   * 200 - 100 deviation from center to the right
   * 101.55 is off track right side
   * 100 is off track left side
   */
  normalizedDrivingLine: number;
  normalizedAIBrakeDifference: number;
  tireWear: TireData;
  trackId: number;
}