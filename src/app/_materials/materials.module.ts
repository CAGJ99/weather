import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material';

const MaterialComponents = [

    MatSidenavModule
];


@NgModule({

    imports: [ MaterialComponents ],
    exports: [ MaterialComponents],
})

export class MaterialsModule {}