# Medacte - Next Generation Health Platform

Une plateforme de santé digitale de nouvelle génération au Maroc, construite avec les technologies les plus modernes.

## 🚀 Technologies Utilisées

- **Next.js 14** - Framework React moderne
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **Three.js** - Graphiques 3D
- **React Three Fiber** - Intégration Three.js avec React

## 🏗️ Structure du Projet

```
src/
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Page d'accueil
│   └── globals.css     # Styles globaux
└── components/
    ├── 3d/
    │   └── MedacteLogo.tsx    # Logo 3D animé
    └── sections/
        ├── Header.tsx         # Navigation
        ├── Hero.tsx          # Section principale
        └── FAQ.tsx           # Questions fréquentes
```

## 🛠️ Installation

```bash
# Cloner le projet
git clone [repository-url]
cd medacte-nextgen

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📦 Scripts Disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run start` - Serveur de production
- `npm run lint` - Vérification du code

## 🎨 Fonctionnalités

### ✅ Implémentées
- **Header** avec navigation et sélecteur de langue
- **Hero Section** avec animations et statistiques
- **FAQ** interactive avec recherche et catégories
- **Logo 3D** animé avec Three.js
- **Design responsive** pour tous les appareils
- **Animations fluides** avec Framer Motion

### 🚧 En Développement
- Section Services
- Section À propos
- Section Contact
- Chat IA intégré
- Système d'authentification

## 🌐 Déploiement

Le projet est optimisé pour le déploiement sur Vercel :

```bash
npm run build
npm run start
```

## 📱 Compatibilité

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Mobile (iOS Safari, Chrome Mobile)
- ✅ Tablette (iPad, Android)

## 🔧 Configuration

### Variables d'Environnement
```env
NEXT_PUBLIC_SITE_URL=https://medacte.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📄 Licence

© 2024 Medacte. Tous droits réservés.

## 🤝 Contribution

Pour contribuer au projet :

1. Fork le repository
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

---

**Medacte** - L'avenir de la santé digitale au Maroc 🇲🇦
