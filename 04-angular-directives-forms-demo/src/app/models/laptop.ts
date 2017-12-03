export class Laptop {
  constructor(
    public id : number,
    public processor : string,
    public ram : string,
    public operatingSystem : string,
    public hardDisk? : number
  ) { }
}