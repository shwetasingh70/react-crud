import React from 'react';
import axios from 'axios';

class Add extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title : '',
      description : '',
      type : ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
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
  handleSubmit(e){
    e.preventDefault();
    const news={
      title:this.state.title,
      description:this.state.description,
      type:this.state.type
    }
    console.log(news);
    axios.post('http://localhost:8081/add', news)
    .then(function(res){
      const newsList = res.newsAdd;
      this.setState({newsList}); 
    })
  }
   componentDidMount() {
        axios.get(`http://localhost:8081`)
        .then(res => {
          console.log({res});
        })
        .catch(function(error){
        console.log(error);
      });

    //}  
  }



	render() {
	return(
	<div className="Add">
	<div className="container h-100">
  	<div className="row h-100 align-items-center">
    <div className="col-xl-5 col-lg-6 col-md-8 pr-0 pl-0  mx-auto text-center ">
      <h1 className="text-white bg-secondary mb-0 pb-2 pt-2 rounded-top">ADD NEWS</h1>
      <br/>
      <form method="post" onSubmit={this.handleSubmit}>
      	<input type="text" name="title" 
        className="form-control" placeholder="News Title" onChange={this.handleTitleChange} />
      	<br/>
      	<textarea name="description" className="form-control" rows="4" 
        onChange={this.handleDescriptionChange}>
        </textarea>
      	<br/>
      	<input type="radio" name="type" value="normal"
        onChange={this.handleTypeChange}/>Normal News
      	<input type="radio" name="type" value="breaking"
        onChange={this.handleTypeChange}/>Breaking News
      	<br/><br/>
      	<button type="submit" name="add" className="form-control">Add News</button>
      </form>
	</div>
	</div>
	</div>
	</div>

		);
	}
}

export default Add;