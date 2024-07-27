import * as React from 'react';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Grid, Paper, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(10),
  width: '100%', // Set width to 100% to take full width
  color: theme.palette.text.primary,
}));

const Reference = () => {
  return (
    <>
    <Breadcrumbs/>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        px: { xs: 2, sm: 3, md: 5 },
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={2} style={{marginRight:"4%",marginTop:"13%"}}>
        <Grid item xs={11} md={8}>
          <StyledPaper sx={{ my: 1, p: 2 }}>
            <Typography noWrap>
              <SimpleTreeView>
                <TreeItem itemId="grid" label="Week 1">
                <TreeItem
                nodeId="grid-community"
                label={
                  <div style={{ whiteSpace: 'normal', wordBreak: 'break-word',textAlign:"justify" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                      }
                      sx={{ marginBottom: 2 }}/>
                  <TreeItem itemId="grid-pro" label={<div><b>Reference:<Link>Click here</Link></b></div>} sx={{ marginBottom: 2 }}/>
                  <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                 
                </TreeItem>
              </SimpleTreeView>
            </Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={11} md={8}>
          <StyledPaper sx={{ my: 1, p: 2 }}>
            <Typography noWrap>
              <SimpleTreeView>
                <TreeItem itemId="grid" label="Week 2">
                <TreeItem
                nodeId="grid-community"
                label={
                  <div style={{ whiteSpace: 'normal', wordBreak: 'break-word',textAlign:"justify" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                      }
                      sx={{ marginBottom: 2 }}/>
                  <TreeItem itemId="grid-pro" label={<div><b>Reference:<Link>Click here</Link></b></div>} sx={{ marginBottom: 2 }}/>
                  <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                 
                </TreeItem>
              </SimpleTreeView>
            </Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={11} md={8}>
          <StyledPaper sx={{ my: 1, p: 2 }}>
            <Typography noWrap>
              <SimpleTreeView>
                <TreeItem itemId="grid" label="Week 3">
                <TreeItem
                nodeId="grid-community"
                label={
                  <div style={{ whiteSpace: 'normal', wordBreak: 'break-word',textAlign:"justify" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                      }
                      sx={{ marginBottom: 2 }}/>
                  <TreeItem itemId="grid-pro" label={<div><b>Reference:<Link>Click here</Link></b></div>} sx={{ marginBottom: 2 }}/>
                  <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                 
                </TreeItem>
              </SimpleTreeView>
            </Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={11} md={8}>
          <StyledPaper sx={{ my: 1, p: 2 }}>
            <Typography noWrap>
              <SimpleTreeView>
                <TreeItem itemId="grid" label="Week 4">
                <TreeItem
                nodeId="grid-community"
                label={
                  <div style={{ whiteSpace: 'normal', wordBreak: 'break-word',textAlign:"justify" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                      }
                      sx={{ marginBottom: 2 }}/>
                  <TreeItem itemId="grid-pro" label={<div><b>Reference:<Link>Click here</Link></b></div>} sx={{ marginBottom: 2 }}/>
                  <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                 
                </TreeItem>
              </SimpleTreeView>
            </Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={11} md={8}>
          <StyledPaper sx={{ my: 1, p: 2 }}>
            <Typography noWrap>
              <SimpleTreeView>
                <TreeItem itemId="grid" label="Week 5">
                <TreeItem
                nodeId="grid-community"
                label={
                  <div style={{ whiteSpace: 'normal', wordBreak: 'break-word',textAlign:"justify" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                      }
                      sx={{ marginBottom: 2 }}/>
                  <TreeItem itemId="grid-pro" label={<div><b>Reference:<Link>Click here</Link></b></div>} sx={{ marginBottom: 2 }}/>
                  <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                 
                </TreeItem>
              </SimpleTreeView>
            </Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={11} md={8}>
          <StyledPaper sx={{ my: 1, p: 2 }}>
            <Typography noWrap>
              <SimpleTreeView>
                <TreeItem itemId="grid" label="Week 6">
                <TreeItem
                nodeId="grid-community"
                label={
                  <div style={{ whiteSpace: 'normal', wordBreak: 'break-word',textAlign:"justify" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                      }
                      sx={{ marginBottom: 2 }}/>
                  <TreeItem itemId="grid-pro" label={<div><b>Reference:<Link>Click here</Link></b></div>} sx={{ marginBottom: 2 }}/>
                  <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                 
                </TreeItem>
              </SimpleTreeView>
            </Typography>
          </StyledPaper>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default Reference;
