// Définition de la classe Apartment
export class Apartment {
    apartNum!: number;          // Numéro de l'appartement
    floorNum!: number;          // Numéro de l'étage
    surface!: number;           // Surface de l'appartement en m²
    terrace!: boolean;          // Si l'appartement a une terrasse ou non
    surfaceterrace!: number;    // Surface de la terrasse en m²
    category!: string;          // Catégorie de l'appartement (par exemple, 'T2', 'T3', etc.)
    ResidenceId!: number;  
    residence: string;
    // L'ID de la résidence à laquelle cet appartement appartient
  
    constructor(
      apartNum: number,
      floorNum: number,
      surface: number,
      terrace: boolean,
      surfaceterrace: number,
      category: string,
      ResidenceId: number,
      residence:string
    ) {
      this.apartNum = apartNum;
      this.floorNum = floorNum;
      this.surface = surface;
      this.terrace = terrace;
      this.surfaceterrace = surfaceterrace;
      this.category = category;
      this.ResidenceId = ResidenceId;
      this.residence=residence;
    }
    
  }
  