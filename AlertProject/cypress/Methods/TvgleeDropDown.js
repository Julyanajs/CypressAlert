class TvgleeDrop{

    //Access TvgleeHome
    dropHome(){
        cy.visit('/');
  
    } 
    
    //Select Entertainment on Dropdown
    entertainmentselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Entertainment').then(option =>{
            cy.wrap(option).contains('Entertainment');
            option[0].click();
  })
}
    entertainmentcheck(){       
        cy.get('a > .btn').click();
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=Entertainment');
     }

     //Select spanish on DropDown
     spanishselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Spanish').then(option =>{
            cy.wrap(option).contains('Spanish');
            option[0].click();
        })
     }

     spanishcheck(){
        cy.get('a > .btn').click();
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=Spanish');

     }

     // Select Animal Videos on Dropdown
     animalvideosselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Animal Videos').then(option => {
            cy.wrap(option).contains('Animal Videos');
            option[0].click();
        })
    }
     animalvideoscheck(){
        cy.get('a > .btn').click(); 
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=animals');
    
    }

    // Select Animals Part II on Dropdown
    animalpartIIselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Animals Part II').then(option => {
            cy.wrap(option).contains('Animals Part II');
            option[0].click(); 
        })

    }
    animalpartIIcheck(){
        cy.get('a > .btn').click(); 
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=animals_part_ii');

    }

    // Select Auto Shows on Dropdown
    autoshowselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Auto Shows').then(option => {
            cy.wrap(option).contains('Auto Shows');
            option[0].click();

        })
      
    }
    autoshowcheck(){
        cy.get('a > .btn').click();
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=auto_shows');

    }

    // Select Beauty on Dropdown
    beautyselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Beauty').then(option => {
            cy.wrap(option).contains('Beauty');
            option[0].click();

        })
      
    }
    beautycheck(){
        cy.get('a > .btn').click();
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=beauty');

    }

     // Select Celebrities on Dropdown
     celebritiesselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Celebrities').then(option => {
            cy.wrap(option).contains('Celebrities');
            option[0].click();

        })
      
    }
    celebritiescheck(){
        cy.get('a > .btn').click();
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=celebrities');

    }

     // Select Celebrity News on Dropdown
     celebritiesnewselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Celebrity News').then(option => {
            cy.wrap(option).contains('Celebrity News');
            option[0].click();

        })
      
    }
    celebritiesnewcheck(){
        cy.get('a > .btn').click();
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=celebrity_news');

    }

     // Select Computer Programming on Dropdown
     computerprogselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Computer Programming').then(option => {
           cy.wrap(option).contains('Computer Programming');
           option[0].click();
    
            })
          
        }
     computerprogcheck(){
        cy.get('a > .btn').click();
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=computer_programming');
    
        }
        
        
    // Select Cooking on Dropdown
     cookingselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Cooking').then(option => {
           cy.wrap(option).contains('Cooking');
           option[0].click();
    
            })
          
        }
     cookingcheck(){
        cy.get('a > .btn').click();
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=cooking');
    
        }

    // Select Fashion on Dropdown
     fashionselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Fashion').then(option => {
           cy.wrap(option).contains('Fashion');
           option[0].click();
    
            })
          
        }
     fashioncheck(){
        cy.get('a > .btn').click();
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=fashion');
    
        }
    // Select Miscellaneous on Dropdown
    misceselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Miscellaneous').then(option => {
           cy.wrap(option).contains('Miscellaneous');
           option[0].click();
    
            })
          
        }
     miscecheck(){
        cy.get('a > .btn').click();
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=miscellaneous');
    
     
    }
    // Select Most Viewed on Dropdown
    mostviewedselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Most Viewed').then(option => {
           cy.wrap(option).contains('Most Viewed');
           option[0].click();
    
            })
          
        }
     mostviewedcheck(){
        cy.get('a > .btn').click();
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=most_viewed');
    
     }
    // Select Most Watched Videos on Dropdown
    mostwatchedselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Most Watched Videos').then(option => {
           cy.wrap(option).contains('Most Watched Videos');
           option[0].click();
    
            })
          
        }
    mostwatchedcheck(){
        cy.get('a > .btn').click();
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=most_watched');
    
     }    
    // Select Music on Dropdown
    musicselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Music').then(option => {
           cy.wrap(option).contains('Music');
           option[0].click();
    
            })
          
        }
    musiccheck(){
        cy.get('a > .btn').click();
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=music');
    
     } 
    // Select New Movie Trailers on Dropdown
    newmovieselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('New Movie Trailers').then(option => {
           cy.wrap(option).contains('New Movie Trailers');
           option[0].click();
    
            })
          
        }
    newmoviecheck(){
        cy.get('a > .btn').click();
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=new_movie_trailers');
    
     }
     // Select Organic Culture on Dropdown
    organiccultureselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Organic Culture').then(option => {
           cy.wrap(option).contains('Organic Culture');
           option[0].click();
    
            })
          
        }
    organicculturecheck(){
        cy.get('a > .btn').click();
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=organic_culture');
    
     }
     // Select Television/Movies on Dropdown
     televisionselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Television/Movies').then(option => {
           cy.wrap(option).contains('Television/Movies');
           option[0].click();
    
            })
          
        }
     televisioncheck(){
        cy.get('a > .btn').click();
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=televisionmovies');
    
     }          
     // Select Sports on Dropdown
     sportsselect(){
        cy.get('.border-left-0').click();
        cy.get('.dropdown-menu >').contains('Sports').then(option => {
           cy.wrap(option).contains('Sports');
           option[0].click();
    
            })
          
        }
     sportscheck(){
        cy.get('a > .btn').click();
        cy.url().should('eq', 'http://qa.tvglee.com/Channel/?channelName=sports');
    
     }         
    }


  export default TvgleeDrop;