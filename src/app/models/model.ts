export interface UsuarioLogin {
    nombreCompleto: string;
    token:          string;
    email:          string;
    username:       string;
    imagen:         null;
}

export interface Activity {
    actividadID: number;
    title:       string;
    dueDate:     Date;
    completed:   boolean;
}



export interface ResponseAPI {
    ok:      boolean;
    message: string;
    id:      number;
}


export interface Author {
    authorID:  number;
    firstName: string;
    lastName:  string;
    seleccionado:boolean;
    booksLnk:  any[];
}
export interface Book {
    bookID:      number;
    title:       string;
    description: string;
    pageCount:   number;
    excerpt:     string;
    publishDate: Date;
    authorLnk:   AuthorLnk[];
    coverPhoto:  CoverPhoto[];
}

export interface AuthorLnk {
    bookID:   number;
    authorID: number;
    author:   Author;
}


export interface CoverPhoto {
    coverID: number;
    bookID:  number;
    url:     string;
}

export interface ReporteExcel {
    bookID:      number;
    title:       string;
    description: string;
    pageCount:   number;
    excerpt:     string;
    publishDate: Date;
    firstName:   string;
    lastName:    string;
}
