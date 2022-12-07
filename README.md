Crie uma classe Book com as seguintes propriedades:

title: string
description: string
author: string

Crie uma classe Library com a seguinte propriedade:
books: Book[]

e com os seguintes métodos:

adicionar: addBook(bookInfo: Omit<Book, 'id'>): Book
listar todos: getBooks(): Book[]
remover: removeBookById(id: string): void
mostrar um: getBookById(id: string): Book
editar um: updateBookById(id: string, info: { title?: string, description?: string, author?: string }): Book

Como desenvolvedor(a) que usarei seu programa, devo poder criar Books e Libraries e executar os métodos presentes em Library.
