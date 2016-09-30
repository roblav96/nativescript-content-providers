import {Observable} from "data/observable";
import {ContentProviders} from "nativescript-content-providers";

export class HelloWorldModel extends Observable {
  public message: string;
  private contentProviders: ContentProviders;

  constructor() {
    super();

    this.contentProviders = new ContentProviders();
    this.message = this.contentProviders.message;
  }
}