var _projects;
var _artists;

$(document).ready(function(){
    loadData("exhibit_projects_2021.csv", "exhibit_artists_2021.csv");

    $('#exit-exhibit-button').on('click', function(){
        closeExhibitPanel();
    });
});

// $(window).on('resize', function(){
//     resizeExhibitPanel();
// });

/**
 * Load projects from a CSV file as JSON objects
 * @param path_exhibits the location of the CSV file to load
 */
function loadData(path_exhibits, path_artists){
    d3.csv(path_artists).then(function(data){
        _artists = data;
    });
    d3.csv(path_exhibits).then(function(data){
        createContent(data, "gallery");
    });
}

function createContent(projects, divContainerID){
    _projects = d3.select(`#${divContainerID}`).selectAll('.gallery-content')
        .data(projects)
        .enter()
        .append('div')
        .attr('class', 'gallery-content')
        .attr('id', function(d){
            return `gallery-content-${d['id']}`;
        })
        .html(function(d){
            let content = `
                <div>
                    <div class="exhibit-preview">
                        <img alt="image preview for ${d['title']}" src="img/${d['image1']}"/>
                    </div>
                    <div class="exhibit-title">${d['title']}</div>
                    <div class="exhibit-authors">${d['authors']}</div>
                    <div class="exhibit-desc">${d['abstract']}</div>
                </div>
                <br>
                <div><button class="gallery-button" id="gallery-button-${d['id']}">show more</button></div>`;

            return content;
        })
        .style('opacity', 0);

    _projects.transition()
        .duration(function(d){
            return (parseInt(d['id']) + 1) * 200;
        })
        .style('opacity', 1);

    _projects
        .on('click', function(e, d){
            openExhibitPanel(d);
        });
}

function resizeExhibitPanel(){
    let exhibitPanel = $('#exhibit-panel');
    let docHeight = $(document).height();
    if (exhibitPanel.height() <= docHeight){
        exhibitPanel.height(docHeight);
    }
    else {
        exhibitPanel.css({
            height: 'fit-content'
        });
    }
}

function openExhibitPanel(exhibitData){
    populateExhibitPanel(exhibitData);
    // resizeExhibitPanel();
    let exhibitPanel = $('#exhibit-panel');
    exhibitPanel.css({
        display: 'block',
        visibility: 'visible'
    });
    exhibitPanel.animate({ opacity: 1 }, 'fast');
    exhibitPanel.scrollTop(0);
    $('#exhibit-image-gallery').scrollLeft(0);
}

function closeExhibitPanel(){
    // stop all videos
    // $('iframe').each(function(){
    //     var src = $(this).attr('src');
    //     $(this).attr('src', src);
    // });
    d3.select('#exhibit-video')
        .html('');

    let exhibitPanel = $('#exhibit-panel');
    exhibitPanel.animate({ opacity: 0 }, 'fast', function(){
        setTimeout(function(){
            d3.select('#exhibit-artist-bios').selectAll('.artist-bio').remove();
            d3.selectAll('.exhibit-img').remove();

            exhibitPanel.css({
                opacity: 0,
                display: 'none',
                visibility: 'hidden'
            });
        }, 800);
    });
}

function populateExhibitPanel(exhibitData){
    // add info
    $('#exhibit-title').text(exhibitData['title']);
    $('#exhibit-authors').html(exhibitData['authors']);
    $('#exhibit-year').text(exhibitData['year']);
    $('#exhibit-desc').html(makeParagraphHTML(exhibitData['description']));

    // add images
    const MAX_IMAGES = 5;
    for (let i = 1; i <= MAX_IMAGES; i++){
        if (exhibitData[`image${i}`] === '') continue;

        d3.select('#exhibit-image-gallery').append('img')
            .attr('class', 'exhibit-img')
            .attr('id', `exhibit-img-${i}`)
            .attr('src', 'img/' + exhibitData[`image${i}`]);
    }

    // add video
    // d3.select('#exhibit-video-presentation')
    //     .attr('src', exhibitData['long_video']);
    d3.select('#exhibit-video')
        .html(exhibitData['video']);


    // add artists bio
    let artist_list = exhibitData['authors'].split(', ');
    let artist_info = _artists.filter(function(artist){
        return artist_list.indexOf(artist['name']) > -1;
    });

    // add collaborator bio
    let collab_list = exhibitData['collaborators'].split(', ');
    let collab_info = _artists.filter(function(artist){
        return collab_list.indexOf(artist['name']) > -1;
    });

    let artistBios = d3.select('#exhibit-artist-bios').selectAll('.artist-bio')
        .data(artist_info.concat(collab_info))
        .enter()
        .append('div')
        .attr('class', 'artist-bio');

    artistBios.append('div')
        .attr('class', 'center')
        .append('img')
        .attr('class', 'artist-bio-img')
        .attr('src', function(d){
            return `artists/${d['image']}`;
        });

    artistBios.append('a')
        .attr('class', 'artist-link')
        .attr('href', function(d){
            return d['link'];
        })
        .attr('target', '_blank')
        .html(function(d){
        });

    artistBios.append('div')
        .attr('class', 'artist-bio-desc')
        .html(function(d){
            let artistLink = d['link'] !== '' ? `<a href="${d['link']}" class="artist-link" target="_blank">${d['link']}</a>` : '';
            return `<h3 class="artist-bio-name">${d['name']}</h3> ${artistLink} ${ makeParagraphHTML(d['bio']) }`;
        });
}

function makeParagraphHTML(paragraph){
    return '<p>' + paragraph.replace(/\n/g, '</p><p>') + '</p>';
}

