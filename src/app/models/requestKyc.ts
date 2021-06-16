export interface Ikyc {
  request_id?: number;
  username: string;
  request_status: string;
  level: boolean;
  amount_max_daily?: number;
  amount_max_monthly?: number;
  amount_max_weekly?: number
  first_name?: string;
  last_name?: string;

  name?: string;
  particulars?: Particulars[];
  reason?: string;
}

export interface Particulars {
  document_is_valid: boolean;
  document_type_description: string;
  document_type_name: string;
  image: string;

}
export interface Kyc{
  
}