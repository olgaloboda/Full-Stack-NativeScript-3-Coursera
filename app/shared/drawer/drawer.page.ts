import { ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-pro-ui/sidedrawer/angular';

export class DrawerPage implements AfterViewInit {

	@ViewChild(RadSideDrawerComponent) protected drawerComponent: RadSideDrawerComponent;

	protected drawer: SideDrawerType;

	constructor(private _changeDetectorRef: ChangeDetectorRef) { }

	//after the view is creaed
	ngAfterViewInit() {
		this.drawer = this.drawerComponent.sideDrawer;
		this._changeDetectorRef.detectChanges();
	}

	protected openDrawer() {
		this.drawer.showDrawer();
	}

	protected closeDrawer() {
		this.drawer.closeDrawer();
	}
}