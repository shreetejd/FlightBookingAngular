export interface FlightDetails  
{  
    FlightNumber : Number;
    Airline : string;
    FromPlace:string;
    ToPlace:string;
    StartTime:Date;
    EndTime:Date;
    Days:string;
    Instruments : string;
    BusinessSeatCount : number;
    NonBusinessSeatCount:number;
    Cost:number;
    IsBlocked:boolean;
    Meal:string;
} 