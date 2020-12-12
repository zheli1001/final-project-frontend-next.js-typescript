import React from 'react'
import { ReactComponent } from 'react';
import { Card, Badge} from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Job({ job }) {
    var id = job.id
    var ref = "https://jobs.github.com/positions/" + id;

    return (
        <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
            <a  href={ref}>{job.title}</a>
            </Card.Title>
            <Card.Subtitle>
              {new Date(job.created_at).toLocaleDateString()}
                - from <span className="Warning">{job.company}</span>
            </Card.Subtitle>
            <Badge variant="success" className="mr-2">{job.type}</Badge>
            <Badge variant="primary">{job.location}</Badge>
            <div style = {{wordBreak: 'break-all'}}>
            <br></br>
            <div>How to apply: 
            <ReactMarkdown
                source={job.how_to_apply}
                escapeHtml={false}
                renderers={{
                    link: ({ children, href }) => {
                        return (
                            <Link href={href}>
                                <a>{job.how_to_apply}</a>
                            </Link>
                        );
                    },
                }}
            />
            </div>
            </div>
          </div>
          <img height="60" alt={job.company} src={job.company_logo} />
        </div>
        
      </Card.Body>
    </Card>
    )
    
}