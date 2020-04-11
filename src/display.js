import React from 'react';
import axios from 'axios';
// import map from 'map';
import Modal from 'react-modal';
// import {Link} from 'react-router-dom';

class Display extends React.Component{
	constructor(props){
		super(props);
		this.state={
			news : [],
			title : '',
			description : '',
			type : '',
			id : 0
		}
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
    	this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    	this.handleTypeChange = this.handleTypeChange.bind(this);
     	this.handleEdit = this.handleEdit.bind(this);
     	this.deleteNews = this.deleteNews.bind(this);
	}
	handleTitleChange(e){
    	this.setState({title: e.target.value})
  	}
  	handleDescriptionChange(e){
    	this.setState({description:e.target.value})
  	}
  	handleTypeChange(e){
    	this.setState({type: e.target.value})
  	}
  	
  	openModal(list) {
        this.setState({
            modalIsOpen: true,
            title: list.title,
            description: list.description,
            type:list.type,
            id: list.id
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }
  	handleEdit(e){
    e.preventDefault();
    const editnews={
      title:this.state.title,
      description:this.state.description,
      type:this.state.type,
      id : this.state.id
    }
    //console.log(editnews);
    axios.post('http://localhost:8081/edit/:id', editnews)
    .then(function(res){
      const newsList = res.data;
      this.setstate({newsList}); 
      this.props.history.push('/');
    })
	}

	deleteNews(list){
		const del ={
			id : list.id 

		}
		console.log(del);
		axios.post('http://localhost:8081/delete/:id', del)
		.then(function(res){
			const delnews = res.data;
				this.setState({delnews});
			console.log(delnews);	
		}) 
		/*.then(res=>{
			const delnews = res.data;
			this.setState({delnews});
			console.log(delnews);
		}); */
		
	}

	componentDidMount(){
			axios.get('http://localhost:8081/display')
			.then(res=>{
				const news = res.data;
				this.setState({news});
			});
		}	


	render(){
	return(
		<div className="Display">
			<div className="container">
				<table className="table">
				<thead>
					<tr>
						<th>Latest News</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{ this.state.news.map(list=>

					<tr key={list.id}>
					    <td>{list.id}</td>
						<td>{list.description}</td>
						<td>
						<button type="submit" className="btn btn-primary" 
						onClick={() => this.openModal(list)}>Edit</button>
						<button type="submit" className="btn btn-danger"
						onClick={() => this.deleteNews(list)}>Delete</button>
						<a onClick={() => this.deleteNews(list)}>Deletehere</a>
						</td>
					</tr>
					)
					}
					<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					contentLabel="Edit Modal">
					<div className="container h-100">
				  	<div className="row h-100 align-items-center">
				    <div className="col-xl-5 col-lg-6 col-md-8 pr-0 pl-0  mx-auto text-center ">
			      	<h1 className="text-white bg-secondary mb-0 pb-2 pt-2 rounded-top">ADD NEWS</h1>
			      	<br/>
					<form method="post" onSubmit={this.handleEdit}>
				      	<input type="text" name="title" 
				        className="form-control" placeholder="News Title" 
				        onChange={this.handleTitleChange} value={this.state.title}/>
				      	<br/>
				      	<textarea name="description" className="form-control" rows="4" 
				        onChange={this.handleDescriptionChange} 
				        value={this.state.description}>
				        </textarea>
				      	<br/>
				      	<input type="radio" name="type" value={this.state.type}
				        onChange={this.handleTypeChange}/>Normal News
				      	<input type="radio" name="type" value={this.state.type}
				        onChange={this.handleTypeChange}/>Breaking News
				      	<br/><br/>
				      	<button type="submit" name="edit" className="form-control">Add News</button>
				      </form>
				      </div>
				      </div>
				      </div>
					</Modal>
					</tbody>
				</table>
			</div>
		</div>
		);
	}
}

export default Display;