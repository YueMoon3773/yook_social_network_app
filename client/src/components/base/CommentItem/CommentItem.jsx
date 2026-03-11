import { Link } from 'react-router-dom';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import './CommentItem.scss';

const commentItemSchema = z.object({});

const CommentItem = ({
    showUserInfoInCommentItem,
    showPostTitleInCommentItem,
    usrAvatar,
    usrFirstName,
    usrLastName,
    usrUserName,
    isUsrAdmin,postId,
    postTitle,
}) => {
    return <div>CommentItem</div>;
};

export default CommentItem;
