import { Observable } from "rxjs";

export class Test {
    invoke() {
        let observable: Observable<Object> = this.createObservable();
        this.subscribeToObservable(observable);
    }

    createObservable(): Observable<Object> {
        return new Observable((observer) => {

            setTimeout(()=>{
                let i;
                for(i =0 ;i<10000000;i++){}
                observer.next(`Hello ${i}`);
            },1000);
            setTimeout(()=>{
                let i;
                for(i =0 ;i<10000000;i++){}
                observer.next(`Welcome ${i}`);
            },2000);
            setTimeout(()=>{
                let i;
                for(i =0 ;i<10000000;i++){}
                observer.next(`Asynchronous ${i}`);
            },3000);
            setTimeout(()=>{
                let i;
                for(i =0 ;i<10000000;i++){}
                observer.next(`Communication ${i}`);
            },4000);


            // observer.next("123....");
            // observer.next("456....");
            // observer.next("helllo");
        })
    }

    subscribeToObservable(observable: Observable<Object>) {
        observable.subscribe((data) => {
            console.log(data);
        })
    }
}