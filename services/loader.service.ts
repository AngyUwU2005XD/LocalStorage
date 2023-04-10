import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  

  constructor(private storage: Storage) { 
    this.initstorage();
  }

  private async initstorage(){
    await this.storage.create();
  }

  public save(key: string, value:string){
    return this.storage.set(key, value)
  }

  public async load(key:string):Promise<string>{
    return new Promise<string>((resolve,reject)=>{
      this.storage.get(key).then((text)=>{
        resolve(text);
      })
    })
  }
}
