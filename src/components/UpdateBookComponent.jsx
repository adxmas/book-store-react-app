import React, { Component } from 'react';
import BookService from '../services/BookService';

class UpdateBookComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            author: '', 
            name: '', 
            price: '', 
            genre: ''
        }

        this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeGenreHandler = this.changeGenreHandler.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount(){
        BookService.getBookById(this.state.id).then((res) => {
            let book = res.data;
            this.setState({
                author: book.author, 
                name: book.name, 
                price: book.price,
                genre: book.genre
            });
        });
    }

    
    

    changeAuthorHandler = (event) => {
        this.setState({author: event.target.value});
    }
    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }
    changePriceHandler = (event) => {

        this.setState({price: event.target.value});
    }
    changeGenreHandler = (event) => {
        this.setState({genre: event.target.value});
    }

    cancel(){
        this.props.history.push('/books');
    }

    updateBook = (e) => {
        e.preventDefault();
        let book = {author: this.state.author, name: this.state.name, price: this.state.price, genre: this.state.genre};
        console.log('book => ' + JSON.stringify(book));

        BookService.updateBookById(this.state.id, book)
        .then(res =>{  
            this.props.history.push('/books'); 
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Book</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label><b>Author's name</b></label>
                                        <input placeholder="Enter author" name="author" className="form-control" 
                                        value={this.state.author} onChange={this.changeAuthorHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label><b>Book's name</b></label>
                                        <input placeholder="Enter name" name="name" className="form-control" 
                                        value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label><b>Book's price</b></label>
                                        <input placeholder="Enter price" type="number" name="price" className="form-control" 
                                        value={this.state.price} onChange={this.changePriceHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label><b>Book's genre</b></label>
                                        <input placeholder="Enter genre" name="genre" className="form-control" 
                                        value={this.state.genre} onChange={this.changeGenreHandler}/>
                                    </div>
                                    <br></br>
                                    <button className="btn btn-success" onClick={this.updateBook}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel}
                                     style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
             

            </div>
        );
    }
}

export default UpdateBookComponent;