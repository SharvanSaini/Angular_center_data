import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AppService {

  // BaseUrl='http://localhost:8902/aclassdeal/api';
BaseUrl='http://localhost:8902';
       //http://localhost:8901
   
errorHandler(error){
  return Observable.throw(error) ;
  }

  successResponse(response){
  try {
      if (response) 
      {
        console.log("response is "+ response);
        return response.data;
      }
    }
    catch (ex) {
      console.log(ex);
    }
    return response;

  }
  icsdSuccessResponse(response){
    try {
        if (response) 
        {
          console.log("response is "+ response);
          return response; 
        }
      }
      catch (ex) {
        console.log(ex);
      }
      return response;
  
    }
  constructor(private httpClient:HttpClient) { }

  saveEmp(formData) {
    console.log('saveEmp'+formData);
    let url=this.BaseUrl+'/saveEmpTbl';
       return this.httpClient.post(url,formData).pipe(map(this.successResponse), catchError(this.errorHandler)); 
  }

  deleteEmp(empno):Observable <any> {
    console.log('deleteEmp'+empno);
    let url=this.BaseUrl+'/deleteEmpTbl?empno='+empno;
    console.log(url);
       return this.httpClient.get(url).pipe(map(this.successResponse), catchError(this.errorHandler)); 
  }
  // 
  // RxJS catchError operator catches the error thrown by Observable and 
  //handles it by returning a new Observable or throwing user defined error.
  // catchError is the changed name of catch starting from RxJS 5.5.
  // Angular 6 integrates RxJS 6 and hence Angular 6 onwards we need to use 
  //RxJS catchError operator to handle error. catchError is the pipeable
  // operator and it is used within pipe function of Observable. 
  //The parameter of catchError is a function that takes error as 
  //argument and returns Observable instance. catchError is imported as 
  //following.
  getAllEmps()   
  {
    
    let url = this.BaseUrl+'/getAllEmps';
    return this.httpClient.get(url).pipe(map(this.icsdSuccessResponse),catchError(this.errorHandler));
  }
  getEmpByEmpno(empno)
  {
    let url = this.BaseUrl+'/getEmpByEmpno?empno='+empno;
    return this.httpClient.get(url).pipe(map(this.icsdSuccessResponse),catchError(this.errorHandler));
  }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

  uploadImage(formData) 
  {
    console.log("upload image called ");
    console.log('upload image proudct'+formData);   
    let url=this.BaseUrl+'/uploadFile';
       return this.httpClient.post(url,formData).pipe(map(this.successResponse), catchError(this.errorHandler));
 
  }

  deleteImage(formData) 
  {
    console.log('delete proudct'+formData);   
    let url=this.BaseUrl+'/delProd';
       return this.httpClient.post(url,formData).pipe(map(this.successResponse), catchError(this.errorHandler));
 

    // return this.http.post<any>(`${this.apiUrl}api/deleteImage`, formData)
    // .pipe(
    //   catchError(this.handleError)
    // );
  }

  saveProduct(formData) 
  {
     const HttpUploadOptions = {
      headers: new HttpHeaders({
        "Content-Type": "multipart/form-data"
      }),

    }

    console.log('save proudct'+formData);   
    let url=this.BaseUrl+'/saveProductWithImages';
       return this.httpClient.post(url,formData).pipe(map(this.successResponse), catchError(this.errorHandler));
 
  }

  approveProducts(productIdList)
    {
      let url=this.BaseUrl+'/approveProduct?Ids='+productIdList;
       return this.httpClient.get(url,productIdList).pipe(map(this.successResponse), catchError(this.errorHandler));
    }


  saveCategory(formData) {
      console.log('savecategory'+formData);
      let url=this.BaseUrl+'/saveCategory';
         return this.httpClient.post(url,formData).pipe(map(this.successResponse), catchError(this.errorHandler));
   
    }

  saveSubCategory(data){
     let url=this.BaseUrl+'/saveSubCategory';
    return this.httpClient.post(url,data).pipe(map(this.successResponse), catchError(this.errorHandler));
    }

  reportFormOnSubmit(data,prodId){
     let url=this.BaseUrl+'/addReportedAids?prodId='+prodId;
    return this.httpClient.post(url,data).pipe(map(this.successResponse), catchError(this.errorHandler));
    
    }

  saveAttribute(data){
       let url=this.BaseUrl+'/saveAttribute';
    return this.httpClient.post(url,data).pipe(map(this.successResponse), catchError(this.errorHandler));
      }

  getAllProducts(limit,offset){
        let url = this.BaseUrl+'/getAllProducts?limit='+limit+'&offset='+offset;
     return this.httpClient.get(url).pipe(map(this.successResponse),catchError(this.errorHandler));
      }
  getAllProductsDashboard(limit,offset){
        let url = this.BaseUrl+'/getAllProductsDashboard?limit='+limit+'&offset='+offset;
     return this.httpClient.get(url).pipe(map(this.successResponse),catchError(this.errorHandler));
      }
  
  getAllPendingProduct(limit,offset){
    let url = this.BaseUrl+'/getAllPendingProducts?limit='+limit+'&offset='+offset;
     return this.httpClient.get(url).pipe(map(this.successResponse),catchError(this.errorHandler));
  }
  getProductApprovedById(prodId)
      {
        let url = this.BaseUrl+'/getProductApprovedById?prodid='+prodId;
        return this.httpClient.get(url).pipe(map(this.successResponse),catchError(this.errorHandler));
      }

      getProductById(prodId){
        let url = this.BaseUrl+ '/getProductById?prodId=' +prodId;
        return this.httpClient.get(url).pipe(map(this.successResponse),catchError(this.errorHandler));
      }

  getAllCategories(limit,offset)
   {
     let url = this.BaseUrl+'/getAllCategories?limit='+limit+'&offset='+offset;
     return this.httpClient.get(url).pipe(map(this.successResponse),catchError(this.errorHandler));
   }

  getAllSubCategoryAndAttributeOfCategoryCode(catCode,limit,offset){
    let url = this.BaseUrl+'/getAllSubCategoryAndAttributeOfCategoryCode?catCode='+catCode+'&limit='+limit+'&offset='+offset;
    return this.httpClient.get(url).pipe(map(this.successResponse),catchError(this.errorHandler));
   }

  getAllAttributeOfCategory(catCode){
     let url=this.BaseUrl+'/getAllAttributeOfCategory?catCode='+catCode;
     return this.httpClient.get(url).pipe(map(this.successResponse),catchError(this.errorHandler));
   }


  getAllReportedAds(limit,offset)
   {
     let url = this.BaseUrl+'/getallAds?limit='+limit+'&offset='+offset;
     return this.httpClient.get(url).pipe(map(this.successResponse),catchError(this.errorHandler));
   }

  blockAdd(reportedId){
        let url = this.BaseUrl+'/blockAdd?reportedId='+reportedId;
     return this.httpClient.get(url).pipe(map(this.successResponse),catchError(this.errorHandler));
   
   }

   addToWishlist(prodId){
    let url = this.BaseUrl+'/addtoWishlist?prodId='+prodId;
    return this.httpClient.post(url, prodId).pipe(map(this.successResponse),catchError(this.errorHandler));
   }

   getWishList(){
     let url = this.BaseUrl+'/getallWishlist';
     return this.httpClient.get(url).pipe(map(this.successResponse),catchError(this.errorHandler));
   }

  // userName = new Subject<any>();
   userName = new BehaviorSubject<any>('RAM');
}



