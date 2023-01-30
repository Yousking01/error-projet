import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ajout-annonce',
    loadChildren: () => import('./ajout-annonce/ajout-annonce.module').then( m => m.AjoutAnnoncePageModule)
  },
  {
    path: 'ajout-site',
    loadChildren: () => import('./ajout-site/ajout-site.module').then( m => m.AjoutSitePageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./forget/forget.module').then( m => m.ForgetPageModule)
  },
  {
    path: 'formulaire',
    loadChildren: () => import('./formulaire/formulaire.module').then( m => m.FormulairePageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'listesite',
    loadChildren: () => import('./listesite/listesite.module').then( m => m.ListesitePageModule)
  },
  {
    path: 'password-sucess-full',
    loadChildren: () => import('./password-sucess-full/password-sucess-full.module').then( m => m.PasswordSucessFullPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'profilannonceur',
    loadChildren: () => import('./profilannonceur/profilannonceur.module').then( m => m.ProfilannonceurPageModule)
  },
  {
    path: 'profilsite',
    loadChildren: () => import('./profilsite/profilsite.module').then( m => m.ProfilsitePageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
