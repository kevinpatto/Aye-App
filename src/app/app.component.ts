import {Component, enableProdMode, Inject} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {environment} from "../environments/environment.prod";
import {DOCUMENT} from "@angular/common";
import {AuthService} from "@auth0/auth0-angular";
import {SharedDataService} from "./services/shared-data.service";
import {AyeUser} from "./interfaces/aye-user";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  version: string = '';
  username$: Observable<AyeUser | undefined>;

  private readonly _mobileQueryListener: () => void;
  public innerWidth?: number;


  constructor(@Inject(DOCUMENT)
              public document: Document,
              public auth: AuthService,
              private sharedDataService: SharedDataService,
              changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.username$ = this.sharedDataService.ayeUser$;
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.version = environment.version;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  isDevMode(): boolean {
    return this.sharedDataService.isDevMode === 'true';
  }


}
