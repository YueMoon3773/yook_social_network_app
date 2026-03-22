import ValidatedComponent from '../../../utils/validateComponentProps';

import { InfoIcon, WarningIcon, ErrorIcon } from '../../../assets/svgIcon';

import './InfoBadge.scss';
import z from 'zod';

const infoBadgeSchema = z.object({
    badgeType: z.string().trim().optional(),
    showBadge: z.boolean().default(false),
    badgeMsg: z.string(),
});

const InfoBadge = ({ showBadge = false, badgeType, badgeMsg }) => {
    return (
        <div className={`infoBadge ${badgeType} ${showBadge ? 'show' : ''}`}>
            {badgeType === 'info' && <InfoIcon></InfoIcon>}
            {badgeType === 'warning' && <WarningIcon></WarningIcon>}
            {badgeType === 'error' && <ErrorIcon></ErrorIcon>}
            <span>{badgeMsg}</span>
        </div>
    );
};

export default ValidatedComponent(InfoBadge, infoBadgeSchema);
