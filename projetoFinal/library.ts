// Classe autor
class Author {
    constructor(public name: string, public writtenBooks: Book[] = []) {}

    // Método para add um livro à lista de livros escritos pelo autor
    addBook(book: Book): void {
        this.writtenBooks.push(book);
    }
}

// classe livro
class Book {
    constructor(
        public title: string,
        public author: Author,
        public isbn: string,
        public availableQuantity: number,

    ) {}

    // metodo de emprestimo
    lend(): void {
        if (this.availableQuantity > 0) {
            this.availableQuantity--;
        } else {
            throw new Error("Book not available for lending.");
        }
    }

    // metodo devolucao
    returnBook(): void {
        this.availableQuantity++;
    }
}

// Subclasses patra tipos especificos de livros
class FictionBook extends Book {
    constructor(title: string, author: Author, isbn: string, availableQuantity: number, public genre: string) {
        super(title, author, isbn, availableQuantity);
    }
}

class NonFictionBook extends Book {
    constructor(title: string, author: Author, isbn: string, availableQuantity: number, public theme: string) {
        super(title, author, isbn, availableQuantity);
    }
}

// Class usuários
class User {
    constructor(public name: string, public id: number, public borrowedBooks: Book[] = []) {}

    // Metodo de emprestimo de livro para usuário
    lendBook(book: Book): void {
        try {
            book.lend();
            this.borrowedBooks.push(book);
        } catch (error) {
            console.error(error.message);
        }
    }

    // Metodo de devolucao de livro 
    returnBook(book: Book): void {
        book.returnBook();
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
        }
    }
}

// emprestimo
class Loan {
    constructor(public user: User, public book: Book, public loanDate: Date) {}

    // Metodo para calcular multa
    calculateFine(): number {
        const daysOverdue = Math.max(0, (new Date().getTime() - this.loanDate.getTime()) / (1000 * 60 * 60 * 24));
        const fine = daysOverdue * 0.5; // Example fine calculation: $0.50 per day overdue
        return fine;
    }
}

// Classe biblioteca
class Library {
    books: Book[] = [];

    // Metodo para add livro a biblioteca
    addBook(book: Book): void {
        this.books.push(book);
        book.author.addBook(book);
    }

    // Método para remover um livro da biblioteca por ISBN
    removeBook(isbn: string): void {
        const index = this.books.findIndex((book) => book.isbn === isbn);
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1)[0];
            const author = removedBook.author;
            if (author) {
                const bookIndex = author.writtenBooks.indexOf(removedBook);
                if (bookIndex !== -1) {
                    author.writtenBooks.splice(bookIndex, 1);
                }
            }
        }
    }

    //  Metodo para encontrar livro por ISBN
    findBookByISBN(isbn: string): Book | undefined {
        return this.books.find((book) => book.isbn === isbn);
    }

    // Método para listar  os livros disponíveis na biblioteca
    listAvailableBooks(): Book[] {
        return this.books.filter((book) => book.availableQuantity > 0);
    }
}

// exemplos de uso
const author1 = new Author("Author 1");
const author2 = new Author("Author 2");

const fictionBook = new FictionBook("Fiction Book", author1, "ISBN123", 5, "Fiction");
const nonFictionBook = new NonFictionBook("Non-Fiction Book", author2, "ISBN456", 3, "Non-Fiction");

const user1 = new User("User 1", 1);
const user2 = new User("User 2", 2);

const library = new Library();
library.addBook(fictionBook);
library.addBook(nonFictionBook);

user1.lendBook(fictionBook);
user2.lendBook(nonFictionBook);

const loan1 = new Loan(user1, fictionBook, new Date());
const loan2 = new Loan(user2, nonFictionBook, new Date());

console.log(user1.borrowedBooks); // [FictionBook { title: 'Fiction Book', ... }]
console.log(user2.borrowedBooks); // [NonFictionBook { title: 'Non-Fiction Book', ... }]
