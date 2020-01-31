import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule,
        MatFormFieldModule} from '@angular/material';


const MaterialComponents = [

    MatSidenavModule,
    MatFormFieldModule
];


@NgModule({

    imports: [ MaterialComponents ],
    exports: [ MaterialComponents],
})

export class MaterialsModule {}