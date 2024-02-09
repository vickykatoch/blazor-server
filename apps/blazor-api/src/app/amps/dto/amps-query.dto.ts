export class AmpsQueryConfigDto {
  name: string;
  method: string;
  // connection: AmpsConnectionInfo;
  //   topic: AmpsTopic;
  options?: string;
  //   viewport?: DataViewportSettings;
  sort?: string;
  limit: number;
}
