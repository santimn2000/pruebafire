import { Injectable }from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { Auth, createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { provideFirestore,getFirestore,Firestore,addDoc,collection,deleteDoc, doc, getDoc, updateDoc, query, where, collectionData, getDocs, setDoc, onSnapshot, docSnapshots, and} from '@angular/fire/firestore';

//import { query, where } from '@firebase/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/models/user.models';
import { authState } from '@angular/fire/auth';
import { map } from 'rxjs';
import { Car } from 'src/app/models/car.models';


@Injectable({
    providedIn: 'root'
})



export class UserService {
    
    constructor(private auth: Auth, private firestore:Firestore){ }

    public uid: string = "";
    public userActual: User = new User();
    public userMod: User = new User();
    public carMod: Car = new Car();

    public resQuery: Car[] = [];

    
    getAuthState(){
        return authState(this.auth);
    }

    getAuth(){
        return this.auth;
    }

    register(email: any, password: any){
        
        return createUserWithEmailAndPassword(this.auth, email, password);
    }

    login(email: any, password: any){
        return signInWithEmailAndPassword(this.auth, email, password)
    }

    signout(){
        return signOut(this.auth);
    }

    delete(user: User){
        const userRefDoc = doc(this.firestore, `Users/${user.id}`)
        return deleteDoc(userRefDoc);
    }

    deleteCar(car: Car){
        const userRefDoc = doc(this.firestore, `carss/${car.id}`)
        return deleteDoc(userRefDoc);
    }

    getMail(){
        return this.auth.currentUser?.email?.split("@")[0];
    }

    guardarCliente(id: any, user:User){

        user.id = id;
        const _user = Object.assign({}, user)

        const Ref = doc(this.firestore, `Users/${id}`);
        setDoc(Ref, _user);
    }

    guardarCoche(id: string, car: Car) {
        car.id = id
        const _car = Object.assign({}, car)

        const Ref = doc(this.firestore, `cars/${id}`);
        setDoc(Ref, _car);
    }

    getUsers(): Observable<User[]>{

        const ref = collection(this.firestore, 'Users');
        return collectionData(ref, { idField: 'id' }) as Observable<User[]>;
    }

    getCars(): Observable<Car[]>{
        const ref = collection(this.firestore, 'cars');
        return collectionData(ref, { idField: 'id' }) as Observable<Car[]>;
    }

    setUID(){

        this.uid = this.auth.currentUser?.uid!
    }

    setClienteMod(user: User) {
        this.userMod = user;
    }

    setCarMod(car: Car){
        this.carMod = car;
    }

    getUserMod(): User {
        return this.userMod;
    }

    getCarMod(): Car {
        return this.carMod;
    }

    modificarUser(userMod: User) {
        const ref = doc(this.firestore, `Users/${userMod.id}`); //
        return updateDoc(ref, {...userMod});
    }

    modificarCar(carMod: Car) {
        const ref = doc(this.firestore, `cars/${carMod.id}`); //
        return updateDoc(ref, {...carMod});
    }
/*
    async getIDByMail(mail: any) {
        const userRef = collection(this.firestore, 'Users');
        let q = query(userRef, where('correo', '==', 'mail'));
        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((document) => {
            const docRef = doc(this.firestore, 'Users', document.id);
            getDoc(docRef).then(data => {
                return data.id //este es el id de usuario
            });
        })
    }
*/
    getDocById(userID: any): Promise<string>{

        var nombre: string = ""

        const docRef = doc(this.firestore, 'Users', userID);
        /*
        getDoc(docRef)
          .then((doc) => {
            nombre = doc.get("nombre")+"";
          })
          .catch((error) => {
            return "";
          })
        */  
       return new Promise((resolve,reject) => {
        onSnapshot(docRef, (doc) => {
            
            nombre = doc.get("nombre");
            this.userActual.nombre = nombre;
            //console.log(nombre);
            resolve(nombre);
        })
       })
        
    }

    getUserDoc(uid: string) {
        
        const ref = doc(this.firestore, 'Users', uid)
        return docSnapshots(ref).pipe(map(data => data.data() as User));
    }

    async consulta(car: Car) {

        console.log(car)
        const ref = collection(this.firestore, 'cars')

        //const q = query(ref, car.caballos.length != 0 ? where("caballos", "==", car.caballos): where("caballos", ">=", ""))
        const q2 = query(ref, car.marca.length != 0 ? where("marca", "in", [car.marca]) : where("marca", ">=", ""))
        //const q3 = query(ref,car.modelo.length != 0 ? where("modelo", "in", [car.modelo]) : where("modelo", ">=", ""))  
        
        //const qt = query(ref, and(where("__name__", "!=", "  "), car.caballos.length != 0 ? where("caballos", "==", car.caballos) : where("caballos", "!=", " "), car.marca.length != 0 ? where("marca", "in", [car.marca]) : where("marca", "!=", " "), car.modelo.length != 0 ? where("modelo", "in", [car.modelo]) : where("modelo", "!=", " ")))

        const querySnapshot = getDocs(q2);

        (await querySnapshot).forEach((doc) => {
            this.resQuery.push(doc.data() as Car)
            //console.log(this.resQuery.at(0)?.color)
            //console.log(doc.data());

            for(var i = this.resQuery.length - 1; i >= 0; i-- ){
                console.log(car.caballos)
                console.log("coche "+i+" -> "+this.resQuery.at(i)?.caballos)
                if(car.modelo != "" && car.modelo != this.resQuery.at(i)?.modelo){
                    this.resQuery.splice(i)
                }
                if(car.caballos != "" && car.caballos != this.resQuery.at(i)?.caballos){
                    this.resQuery.splice(i)
                }
                if(car.color != "" && car.color != this.resQuery.at(i)?.color){
                    this.resQuery.splice(i)
                }
                if(car.vel_max != "" && car.vel_max != this.resQuery.at(i)?.vel_max){
                    this.resQuery.splice(i)
                }
            }
        });

        
    }
      
}
