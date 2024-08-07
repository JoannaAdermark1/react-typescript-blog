import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container, TextField, Button } from '@mui/material';
import { getPostById, savePost, Post } from '../services/localStorageService';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const CreateEditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(EditorState.createEmpty());
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (id) {
      const post = getPostById(id);
      if (post) {
        setTitle(post.title);
        setContent(EditorState.createWithContent(post.content));
        setImageUrl(post.imageUrl || '');
      }
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: Post = {
      id: id || new Date().getTime().toString(),
      title,
      content: content.getCurrentContent().getPlainText(),
      imageUrl,
      createdAt: new Date().toISOString(),
    };
    savePost(newPost);
    history.push(`/post/${newPost.id}`);
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <Editor
          editorState={content}
          onEditorStateChange={(editorState) => setContent(editorState)}
          wrapperClassName="wysiwyg-wrapper"
          editorClassName="wysiwyg-editor"
        />
        <TextField
          label="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
      </form>
    </Container>
  );
};

export default CreateEditPage;
