class ApiResponse{
  constructor(statusCode, data ,message="success"){
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;

  }
}

export {ApiResponse};

// ye ek standard format he jsy hm apny sare responses me use kry gy taki sare responses ek jsy ho or easily samjhy ja sky or agr koi bhi chiz nhi dengy arrgument me ya bhul gy to wo error dedega 

