import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Page } from 'ui/page';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { getString, setString } from 'application-settings';
import { RouterExtensions } from 'nativescript-angular/router';

import * as camera from 'nativescript-camera';
import { Image } from 'ui/image';
import * as imagepicker from 'nativescript-imagepicker';

@Component ({
	moduleId: module.id,
	templateUrl: './userauth.component.html'
})
export class UserAuthComponent implements OnInit {

	loginForm: FormGroup;
	registerForm: FormGroup;
	tabSelectedIndex: number = 0;

	@ViewChild("myPicture") myPicture: ElementRef;

	constructor(private page: Page,
			private routerExtensions: RouterExtensions,
			private formBuilder: FormBuilder) {

		this.loginForm = this.formBuilder.group({
			userName: [getString('userName', ''), Validators.required],
			password: [getString('password', ''), Validators.required]

		})

		this.registerForm = this.formBuilder.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			userName: ['', Validators.required],
			password: ['', Validators.required],
			telnum: ['', Validators.required],
			email: ['', Validators.required],

		})


	}

	ngOnInit() {

	}

	register() {
		this.tabSelectedIndex = 1;
	}

	onLoginSubmit() {
		console.log(JSON.stringify(this.loginForm.value));

		setString("userName", this.loginForm.get('userName').value);
		setString("password", this.loginForm.get('password').value);

		this.routerExtensions.navigate(["/home"], {clearHistory: true});
	}

	onRegisterSubmit() {
		console.log(JSON.stringify(this.registerForm.value));
		

		setString("userName", this.registerForm.get('userName').value);
		setString("password", this.registerForm.get('password').value);

		this.loginForm.patchValue({'userName': this.registerForm.get('userName').value,
									'password': this.registerForm.get('password').valueChanges});
	
		this.tabSelectedIndex = 0;
	}

	takePicture() {
		let isAvailable = camera.isAvailable();
		if (isAvailable) {
			camera.requestPermissions();
			var options = {
				width: 100,
				height: 100,
				keepAspectRatio: false,
				saveToGallery: true
			}

			camera.takePicture(options)
				.then((imageAsset) => {
					let image = <Image>this.myPicture.nativeElement;
					image.src = imageAsset;
				})
				.catch((err) => console.log('Error => ' + err.message));
		}
	}

	selectPicture() {
		let context = imagepicker.create({
			mode: 'single'
		});

		context.authorize()
			.then(() => {
				return context.present();
			})
			.then((selection) => {
				selection.forEach((selected) => {
					let image = <Image>this.myPicture.nativeElement;
					image.src = selected;
				});
			})
			.catch((err) => console.log('Error => ' + err.message));
	}
}