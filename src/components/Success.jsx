import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="./assets/success.svg" alt="Success" />
      <h3>Отправлено!</h3>
      <p>Приглашение отправлено {count} пользователям.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
  );
};
