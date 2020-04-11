import React from 'react';
import axios from 'axios';

class Edit extends React.Component{
	constructor(props){
		super(props);
		this.state={
			news : [],
			title : '',
			description : '',
			type : ''
			//id : 0
		}
		this.handleTitleChange = this.handleTitleChange.bind(this);
    	this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    	this.handleTypeChange = this.handleTypeChange.bind(this);
    	this.handleEdit = this.handleEdit.bind(this);
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
  	handleEdit(e){
    e.preventDefault();
    const editnews={
      title:this.state.title,
      description:this.state.description,
      type:this.state.type,
      id : this.props.match.params.id
    }
    
    axios.post('http://localhost:8081/edit'+this.props.match.id, editnews)
    	.then(function(res){
    		console.log(res.data)
    	});

    console.log(editnews);

   /* axios.post('http://localhost:8081/edit/:id', news)
    .then(function(res){
      const newsList = res.data;
      this.setstate({newsList}); 
    })  */
	} 

	// componentDidMount(){
	// 	axios.get('http://localhost:8081/display')
	// 		.then(res=>{
	// 			const news = res.data;
	// 			this.setState({news});
	// 		});
	// 	//let userId = this.props.match.params.id;
	// 	axios.get('http://localhost:8081/edit')
	// 		.then(res=>{
	// 			const editNews = res.data;
	// 			console.log(editNews);
	// 			//this.setstate({editNews}); 
	// 			this.setstate({
	// 				title : editNews.title,
	// 				description : editNews.description,
	// 				type : editNews.type,
	// 				id : editNews.id
	// 			})
	// 		});
	// }


	render(){
	return(
		<div className="Edit">
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
			</div>

		)
	}
}

export default Edit;