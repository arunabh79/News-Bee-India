import React from "react";

class News extends React.Component {
    constructor(props) {
      super(props);
      console.log("i am constructor");
      this.state = { name1: "Loading",count:0 };
      
    }
    async componentDidMount() {
      console.log("i am coponentdidmount");
      let res = await fetch(
        `https://newsapi.org/v2/everything?q=${this.props.newsName}&apiKey=a4f8aea25f2d431da22bcd2a73306576`
      );
      let data = await res.json();
      // console.log(data, typeof data.articles, data.articles, typeof ar);
  
      let arr = data.articles.map((p) => {
        return (
          <div class="p-8">  
          {/* <!--Card 1--> */}
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={p.urlToImage}/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{p.title}</div>
              <p class="text-gray-700 text-base">
                {p.description}
              </p>
              <button class="font-bold text-xl mb-2"> <a href={p.url}>Read more</a></button>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#trending</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#hot</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#current-affairs</span>
            </div>
          </div>
        </div>
        );
      });
      console.log(arr);
      this.setState({ name1: arr });
    }
    render() {
      // this.setState({count:this.state.count+1})
      console.log(" i am render",this.state.count);
      return  <div class="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">{this.state.name1} </div>;
  }}

export default News;