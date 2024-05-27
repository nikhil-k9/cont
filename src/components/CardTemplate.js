import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Link} from '@mui/material';
import { ThumbDown } from '@mui/icons-material';
import { ThumbUp } from '@mui/icons-material';
import { Share } from '@mui/icons-material';
import { Remarkable } from 'remarkable';
import he from 'he';

const md = new Remarkable();

function renderMarkdownToHTML(markdown) {
  const renderedHTML = md.render(markdown);
  const decodedHtmlCode = he.decode(renderedHTML);
  return {__html: decodedHtmlCode};
}
 function  MarkdownPreview({ markdown }) {
  const markup = renderMarkdownToHTML(markdown);
  return <div dangerouslySetInnerHTML={markup} />;
}

export default function CardTemplate(props) {  
  return (
    <Card className='w-[95vw] md:w-4/5 lg:w-2/3 rounded-sm md:rounded-md lg:rounded-lg border-[1px] border-[#3D4345] ' sx={{backgroundColor:"#0D1416"}}>
        <CardContent className='break-all text-[#BAC5C8] text-sm md:text-base lg:text-lg'>
          <h1 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-[#F2F4F5] md:text-3xl lg:text-4xl'>
            {props.children?.title}
          </h1>
          <MarkdownPreview markdown={props.children?.selftext_html} />
          <div className='flex gap-5 justify-between items-center my-3'>
          <div className='flex justify-center items-center border-[1px] border-[#3D4345] px-2 py-1 rounded-xl'>
            <ThumbUp className='text-[#F2F4F5]' sx={{fontSize:"20px"}}/> &nbsp;{ props.children?.score}&nbsp; <ThumbDown className='text-[#F2F4F5]' sx={{fontSize:"20px"}}/>
          </div>
          <Link href={props.children?.url} className='flex justify-center items-center' sx={{textDecoration:"none"}}> <Share/>Share</Link>
          </div>
        </CardContent>
    </Card>
  );
}


//hr #3D4345