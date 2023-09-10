import { 
  profileName,
  profileDescription
 } from "../utils/constants";

export default class UserInfo {
    constructor({name, description}) {
      this._name = name;
      this._description = description;
    }
  
    getUserInfo(){
      const userData = {name: this._name, description: this._description};

      return userData;
    }
  
    setUserInfo({newName, newDesc}){
      this._name.textContent = newName;
      this._description.textContent = newDesc;
      // profileName.textContent = this._name;
      // profileDescription.textContent = this._description;
    }
  
  }
