import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InputType } from '../uikits/Input';
import { FormButton, SimpleButton } from '../uikits/Button';

export default function Message() {
  const [messages, setMessages] = useState([]);
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    message1: '',
    message2: '',
    message3: '',
    message4: ''
  });

  const [editFormData, setEditFormData] = useState({
    title: '',
    type: '',
    message1: '',
    message2: '',
    message3: '',
    message4: ''
  });

  const fetchMessages = async () => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.get("http://localhost:5550/messageTemplate/all", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessages(data);
    } catch (err) {
      console.error("Erreur lors de la récupération des messages :", err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: formData.title,
      templateTargetType: formData.type,
      textVariations: [
        formData.message1,
        formData.message2,
        formData.message3,
        formData.message4
      ].filter(Boolean)
    };

    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "http://localhost:5550/messageTemplate/",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      alert("Message template envoyé avec succès !");
      setFormData({ title: '',type: '', message1: '', message2: '', message3: '', message4: '' });
      fetchMessages();
    } catch (err) {
      console.error("Erreur lors de l'envoi du message :", err);
      alert("Erreur : " + (err.response?.data?.message || err.message));
    }
  };

  const handleChosse = async (templateId) => {
    const token = localStorage.getItem("token");
    try {
      await axios.put(
        `http://localhost:5550/messageTemplate/choose/${templateId}`,
        { templateId },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      alert("Template sélectionné comme actif !");
      fetchMessages();
      
    } catch (err) {
      console.error("Erreur lors de la sélection :", err);
      alert("Erreur : " + (err.response?.data?.message || err.message));
    }
  };

  const handleEditClick = (msg) => {
    setEditingMessageId(msg._id);
    setEditFormData({
      title: msg.title,
      type: msg.type,
      message1: msg.textVariations[0] || '',
      message2: msg.textVariations[1] || '',
      message3: msg.textVariations[2] || '',
      message4: msg.textVariations[3] || ''
    });
  };

  const handleEditSubmit = async (e, id) => {
    e.preventDefault();

    const payload = {
      title: editFormData.title,
      type: editFormData.type,
      textVariations: [
        editFormData.message1,
        editFormData.message2,
        editFormData.message3,
        editFormData.message4
      ].filter(Boolean)
    };

    const token = localStorage.getItem("token");

    try {
      await axios.put(
        `http://localhost:5550/messageTemplate/${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      alert("Message modifié !");
      setEditingMessageId(null);
      fetchMessages();
    } catch (err) {
      console.error("Erreur lors de la modification :", err);
      alert("Erreur : " + (err.response?.data?.message || err.message));
    }
  };

  const handleCancelEdit = () => {
    setEditingMessageId(null);
  };

  return (
    <div className='Message'>
      <div className='m-banner'>
        <h1>Message</h1>
      </div>

      <h2 className='titre'>Entrez votre message</h2>

      <div className='m-formulaire'>
        <form onSubmit={handleSubmit}>
          <InputType type="text" label="Titre" placeholder="Example: Stage" name="title" value={formData.title} onChange={handleChange} />
          <label htmlFor="">Type</label>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="">--le type --</option>
         <option value="profile">Profile</option>
         <option value="post">Post</option>
         </select>
          <InputType type="textarea" label="1ère Variation du Message" name="message1" value={formData.message1} onChange={handleChange} />
          <InputType type="textarea" label="2ème Variation du Message" name="message2" value={formData.message2} onChange={handleChange} />
          <InputType type="textarea" label="3ème Variation du Message" name="message3" value={formData.message3} onChange={handleChange} />
          <InputType type="textarea" label="4ème Variation du Message" name="message4" value={formData.message4} onChange={handleChange} />
          <FormButton dtype="normal">Envoyer</FormButton>
        </form>
      </div>

      <h2 className='titre'>Tes messages</h2>

      <div className='liste-message flex'>
        {messages.map((msg) => (
  <div key={msg._id} className={`message-box flex ${msg.isCurrentTemplate ? "selected" : ""}`}>

  {editingMessageId === msg._id ? (
   <form onSubmit={(e) => handleEditSubmit(e, msg._id)}>
    <InputType type="text" label="Titre" name="title" value={editFormData.title} onChange={handleEditChange} />
     <InputType type="textarea" label="1ère Variation" name="message1" value={editFormData.message1} onChange={handleEditChange} />
      <InputType type="textarea" label="2ème Variation" name="message2" value={editFormData.message2} onChange={handleEditChange} />
       <InputType type="textarea" label="3ème Variation" name="message3" value={editFormData.message3} onChange={handleEditChange} />
      <InputType type="textarea" label="4ème Variation" name="message4" value={editFormData.message4} onChange={handleEditChange} />
    <div className=" update flex">
      <FormButton dtype="normal">Enregistrer</FormButton>
      <SimpleButton dtype="outline" onClick={handleCancelEdit}>Annuler</SimpleButton>
    </div>
    </form>
  ) : (
    <>
      <h3>{msg.title}</h3>
      {msg.isCurrentTemplate && (<span className="templateSelected">Sélectionné</span>)}
      <p> {msg.templateTargetType} </p>
      <ol>
        {msg.textVariations?.map((variation, idx) => (
          <li key={idx}>{variation}</li>
        ))}
      </ol>
      <div className='flex jc-sa l-button'>
        <SimpleButton dtype="outline" onClick={() => handleChosse(msg._id)}>Sélectionner ce template</SimpleButton>
        <SimpleButton dtype="normal" onClick={() => handleEditClick(msg)}>Modifier</SimpleButton>
      </div>
    </>
  )}
</div>
        ))}
      </div>
    </div>
  );
}




