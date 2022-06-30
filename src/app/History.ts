

export interface History  
{  
    BookingID:number;
    Name:string;
    Email:string;
    TotalSeat:number;
    PassingerDetails:string;
    MealType:string;
    SeatNumbers:string;
    PnrNumber:string;
    BookingStatus:string;
    BookType:string;
    BookingTime:Date;
    FlightId:number;
    Airline:string;

} 
export interface HistoryInput  
{  
  
    Email:string;
   
    PnrNumber:string;
   

} 