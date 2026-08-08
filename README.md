# Resto Dit Vin — Concept ATH Web / V1

Homepage statique HTML/CSS/JS native.

## Lancer en local

Depuis ce dossier :

```bash
python -m http.server 5500
```

Puis ouvrir http://127.0.0.1:5500

## Assets intégrés

Les photographies locales sont utilisées directement depuis `assets/images/`, sans URL distante. Le hero est prioritaire ; toutes les autres images sont chargées de manière différée.

| Rôle | Fichier | Ratio d’affichage |
| --- | --- | --- |
| Hero | `food/plat_insta1_améliorer.png` | portrait |
| Carte | `kitchen/carte_interieur.jpg` | 4:5 |
| Plat éditorial | `food/plat_inta3_améliorer.png` | 5:3 recadré |
| Salle / cuisine ouverte | `kitchen/intérieur_1_améliorer.png` | 16:9, 4:3 mobile |
| Accord mets-vins | `wine/plat_et_vin.jpg` | 4:5 |
| Vin | `wine/bouteille_et_verre_vin.jpg` | 4:5 |
| Façade | `place/façade_insta_améliorer.png` | 16:10 |

Un portrait de l’équipe reste à fournir dans `assets/images/people/` pour remplacer le dernier placeholder.

## À remplacer avant toute présentation finale

- Le wordmark `RDV` par un SVG reconstruit fidèlement à partir de l'enseigne réelle.
- Les exemples de carte par une carte datée et vérifiée.
- Les preuves/notes par des données sourcées et datées.
- Ajouter les pages Carte, Restaurant et Contact après validation visuelle de la homepage.
