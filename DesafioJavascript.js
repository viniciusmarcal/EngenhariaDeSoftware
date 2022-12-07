class Book {
    constructor(title, description, author) {
        this.title = title;
        this.description = description;
        this.author = author;
        this.id = String(title.length) + String(description.length) + String(author.length)
    }
}

class Library {
    constructor() {
        this.books = []
    }
    addBook(bookInfo){
        let book = new Book(bookInfo['title'],bookInfo['description'],bookInfo['author'])        
        this.books.push(book)
        console.log(`Livro '${bookInfo['title']}' adicionado à estante.`)
        return book
    }
  
    getBooks() {
          return this.books
      }

    removeBookById(id) {
          let cond = false;
          for (let i = 0; i < this.books.length; i++) {
              if (this.books[i]['id'] === id) {
                  this.books.splice(i, 1);
                  cond = true;
                  break
              } 
          }
          if (cond === false) {
              console.log('Livro não encontrado na estante.')
          }
      }

      getBookById(id) {
          let cond = false;
          for (let i = 0; i < this.books.length; i++) {
              if (this.books[i]['id'] === id) {
                  cond = true;
                  return this.books[i]
              } 
          }
          if (cond === false) {
              console.log('Livro não encontrado na estante.')
          }
      }
  
      updateBookById(id, info) {
        let cond = false;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i]['id'] === id) {
                this.books[i]['title'] = info['title'];
                this.books[i]['description'] = info['description'];
                this.books[i]['author'] = info['author'];
                
                cond = true;
                return this.books[i]
            }
        } 
        if (cond === false) {
            console.log('Livro não encontrado')
        }
    }
}

//const estante = new Library()
//estante.addBook({title: 'A sutíl arte de ligar o f*oda-se', description: 'Não ler, não faz bem para a cabeça', author: 'Mark Manson'})
//estante.addBook({title: '100 Anos de Solidão', description: 'Surreal é uma família se manter bem por tanto tempo', author: 'Gabriel Garcia Marquez'})
//console.log(estante.getBooks())
//estante.removeBookById('323411')
//estante.getBookById('195122')
//console.log(estante.getBooks())
//estante.updateBookById('195122', {title: '100 Anos de Solidão', description: 'Surreal é uma família se manter bem por tanto tempo', author: 'Gabriel García Marquéz'})
//console.log(estante.getBooks())
