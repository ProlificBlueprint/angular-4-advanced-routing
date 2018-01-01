import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Subject }    from 'rxjs/Subject';

@Injectable() export class HeroService  {
    public heroDataSource : Subject<String> = new Subject<String>();
    public heroDataStream: Observable<String> = this.heroDataSource.asObservable();
    public hero : string;
    public attr : string;

    
    constructor() {
        this.hero = null;
        this.attr = null;
    }

    setHero( heroName : string ){
        this.hero = heroName;
    }


    getHero(){
        return this.hero
    }

    setAttr( attrName : string ){
        this.attr = attrName;
    }


    getAttr(){
        return this.attr
    }

    getHeroData(){
        let hero_data = {
            "batman" : {
             "intro" : "I am the knight!",
             "logo" : "assets/batman.png",
              "speed" : {
                "blob" : "Batman is the fastest out there!",
                rating : 8
              },
              "agility" : {
                "blob" : "Agility is Batmans Cream and Butter!",
                rating : 8,
              },
              "strength" : {
                "blob" : "Stronger than average with gagets to allow for super ability",
                rating : 6,
              }
            },
            "robin" : {
                "intro" : "Hey, Im robin!",
                "logo" : "assets/robin.png",
              "speed" : {
                "blob" : "Robin is quicker than the average side kick",
                rating : 7
              },
              "agility" : {
                "blob" : "Robin has the greatest work ethic youve ever seen",
                rating : 9,
              },
              "strength" : {
                "blob" : "Robin is still working on it!",
                rating : 2,
              }
            },

            "green_lantern" : {
                "intro" : "I am the protector of this galaxy!",
                "logo" : "assets/green_lantern.png",
              "speed" : {
                "blob" : "Green Lantern is not very fast",
                rating : 5
              },
              "agility" : {
                "blob" : "His Agility Keeps him high in rank!",
                rating : 8,
              },
              "strength" : {
                "blob" : "His ring is apart of the strongest forces in the galaxy",
                rating : 9,
              }
            },
            "superman" : {
                "intro" : "I am here to protect the people of Earth!",
                "logo" : "assets/superman.png",
              "speed" : {
                "blob" : "Faster Than a speeding bullet",
                rating : 9
              },
              "agility" : {
                "blob" : "No need for agility when you move this quick I guess",
                rating : 0,
              },
              "strength" : {
                "blob" : "Who else is stronger than superman?",
                rating : 10,
              }
            }
          }

        return hero_data;
    }


}
