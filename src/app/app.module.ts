import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import {FormsModule} from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { MensComponent } from './mens/mens.component';
import { ToysComponent } from './toys/toys.component';
import { LaptopComponent } from './laptop/laptop.component';
import { BabyAccessriesComponent } from './baby-accessries/baby-accessries.component';
import { BabyCosmeticsComponent } from './baby-cosmetics/baby-cosmetics.component';
import { DummyHomeComponent } from './dummy-home/dummy-home.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { MobileDescriptionComponent } from './mobile-description/mobile-description.component';
import { CartComponent } from './cart/cart.component';
import { SearchPipePipe } from './search-pipe.pipe';
import { HomeAccessoriesComponent } from './home-accessories/home-accessories.component';
import { WathesComponent } from './wathes/wathes.component';
import { BagsComponent } from './bags/bags.component';
import { WomensComponent } from './womens/womens.component';
import { KidsComponent } from './kids/kids.component';
import { BeautiComponent } from './beauti/beauti.component';
import { FootwearComponent } from './footwear/footwear.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { KitchinAccessoriesComponent } from './kitchin-accessories/kitchin-accessories.component';
import { BabyAccDescriptionComponent } from './baby-acc-description/baby-acc-description.component';
import { HttpClientModule } from '@angular/common/http';
import { MobileService } from './Mobile.service';
import { KidsDesComponent } from './kids-des/kids-des.component';
import { BagDesComponent } from './bag-des/bag-des.component';
import { WomanDesComponent } from './woman-des/woman-des.component';
import { MenDesComponent } from './men-des/men-des.component';
import { BeautiDecComponent } from './beauti-dec/beauti-dec.component';
import { FootwearDesComponent } from './footwear-des/footwear-des.component';
import { WatchesDesComponent } from './watches-des/watches-des.component';
import { HomeAccDesComponent } from './home-acc-des/home-acc-des.component';
import { SortPipePipe } from './sort-pipe.pipe';
import { GiftComponent } from './gift/gift.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { CartService } from './cart.service';
import { ShippingComponent } from './shipping/shipping.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindataComponent } from './admindata/admindata.component';
import { YourAccountComponent } from './your-account/your-account.component';
import { AssignmentComponent } from './assignment/assignment.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogInComponent,
    HomePageComponent,
    MensComponent,
    ToysComponent,
    LaptopComponent,
    BabyAccessriesComponent,
    BabyCosmeticsComponent,
    DummyHomeComponent,
    TvComponent,
    MobileComponent,
    MobileDescriptionComponent,
    CartComponent,
    SearchPipePipe,
    HomeAccessoriesComponent,
    WathesComponent,
    BagsComponent,
    WomensComponent,
    KidsComponent,
    BeautiComponent,
    FootwearComponent,
    FurnitureComponent,
    KitchinAccessoriesComponent,
    BabyAccDescriptionComponent,
    KidsDesComponent,
    BagDesComponent,
    WomanDesComponent,
    MenDesComponent,
    BeautiDecComponent,
    FootwearDesComponent,
    WatchesDesComponent,
    HomeAccDesComponent,
    SortPipePipe,
    GiftComponent,
    AddressComponent,
    PaymentComponent,
    ShippingComponent,
    AdminComponent,
    AdmindataComponent,
    YourAccountComponent,
    AssignmentComponent,
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot([{path:"home",component:HomePageComponent},{path:"login",component:LogInComponent},
    {path:"register",component:RegisterComponent},
    {path:"man",component:MensComponent},
    {path:"toy",component:ToysComponent},
    {path:"laptop",component:LaptopComponent},
    {path:"babyacc",component:BabyAccessriesComponent},
    {path:"babycosm",component:BabyCosmeticsComponent},
    {path:"tv",component:TvComponent},
    {path:"cart",component:CartComponent},
    {path:"mobile",component:MobileComponent},
    {path:"homeAccessories",component:HomeAccessoriesComponent},
    {path:"watch",component:WathesComponent},
    {path:"bag",component: BagsComponent},
    {path:"beauti",component: BeautiComponent},
    {path:"kid",component: KidsComponent},
    {path:"women",component: WomensComponent},
    {path:"gift",component: GiftComponent},
    {path:"address",component:AddressComponent},
    {path:"mandes",component:MenDesComponent},
    {path:"admin",component:AdminComponent},
    {path:"admindata",component:AdmindataComponent},
    {path:"familyinfo",component:AssignmentComponent}
    ])
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
