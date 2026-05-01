import React from 'react';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';

// Icons
import DescriptionIcon from '@mui/icons-material/DescriptionOutlined';
import GavelIcon from '@mui/icons-material/Gavel';
import BlockIcon from '@mui/icons-material/Block';
import PaymentIcon from '@mui/icons-material/PaymentOutlined';
import SecurityIcon from '@mui/icons-material/Security';
import UpdateIcon from '@mui/icons-material/Update';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import WarningIcon from '@mui/icons-material/WarningAmberOutlined';
import PolicyIcon from '@mui/icons-material/Policy';
import BuildIcon from '@mui/icons-material/BuildOutlined';
import ApiIcon from '@mui/icons-material/Api';
import ChatIcon from '@mui/icons-material/ChatOutlined';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CancelIcon from '@mui/icons-material/CancelOutlined';
import CopyrightIcon from '@mui/icons-material/Copyright';

const TermsPage = () => {
  const theme = useTheme();
  
  const lastUpdated = 'April 21, 2025';
  
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <DescriptionIcon color="primary" />,
      content: `These Terms of Service ("Terms") govern your access to and use of the Youtube MultiPost website, applications, and services (collectively, the "Service") provided by the individual operator ("we", "us", "our").\n\n**By registering for, accessing, or using the Service, you agree to be bound by these Terms and our Privacy Policy.** If you do not agree to these Terms, you may not use the Service.\n\n**IMPORTANT:** These terms include limitations on liability and require resolution of disputes through arbitration on an individual basis. Please read them carefully.`
    },
    {
      id: 'service-description',
      title: 'Description of Service',
      icon: <BuildIcon color="primary" />,
      content: `The Service is a platform designed to help users manage multiple YouTube accounts and streamline the video uploading process. Features may include, depending on your subscription plan:\n* Connecting multiple YouTube accounts via Google OAuth.\n* Uploading videos to one or more connected YouTube channels simultaneously.\n* Creating, saving, and applying metadata templates (titles, descriptions, tags, etc.).\n* Scheduling video uploads.\n* Monitoring upload status and viewing history.\n* Accessing an AI Assistant (powered by Google Gemini) for support.\n* Utilizing a Live Chat feature for direct administrator support.\n* Potential API access for programmatic use (typically on higher-tier plans).`
    },
    {
      id: 'account-registration',
      title: 'Account Registration and Responsibility',
      icon: <AccountCircleIcon color="primary" />,
      content: `* **Eligibility:** You must be at least 13 years old (or the minimum age required in your jurisdiction to use online services) to create an account.\n* **Accuracy:** You agree to provide truthful, accurate, current, and complete information during registration and to update your information promptly if it changes.\n* **Security:** You are responsible for maintaining the confidentiality of your account password. You agree to notify us immediately of any unauthorized use of your account or any other security breach. You are responsible for all activities that occur under your account, whether or not authorized by you.`
    },
    {
      id: 'subscription-terms',
      title: 'Subscriptions, Fees, and Payment',
      icon: <PaymentIcon color="primary" />,
      content: `* **Free Tier:** Access to the Service is available at no cost via the Free plan, which includes limited usage (e.g., 5 automated posts per month, 2 connected platforms). The Free plan does not require payment information.\n* **Paid Plans:** Access to additional features and higher usage limits are based on paid subscription plans. Details of current plans and pricing are available on our website or within the Service.\n* **Fees:** You agree to pay all fees associated with your chosen subscription plan in accordance with the pricing and payment terms presented to you.\n* **Payment Processor:** We use a third-party payment processor (e.g., Midtrans) to handle payments. Your use of the payment services is subject to the processor\'s terms and conditions.\n* **Billing:** Paid subscriptions are billed in advance on a recurring basis (e.g., monthly or annually). You authorize us (through our processor) to charge your chosen payment method for the recurring fees.\n* **Automatic Renewal:** **Your paid subscription will automatically renew at the end of each billing period unless you cancel it *before* the end of the current period.** You can manage or cancel your subscription through your account settings or by contacting support.\n* **Cancellation:** If you cancel a paid subscription, it remains active until the end of the current paid period; you will not be charged for the next cycle. Your account reverts to the Free plan at the end of the paid period.\n* **Refunds:** You may request a refund for your **initial** subscription payment within **seven (7) days** of the transaction date by contacting support@multipost.pro. Approved refunds are subject to a **20% deduction** from the original amount paid to cover payment gateway processing fees. Refunds are **not available** for subscription renewals, partial subscription periods beyond the initial 7 days, or if you have violated these Terms.\n* **Price Changes:** We reserve the right to change subscription fees. We will provide you with reasonable prior notice (e.g., 30 days) of any price changes. Your continued use of the Service after a price change constitutes your agreement to pay the new price.\n* **Taxes:** You are responsible for any applicable taxes associated with your subscription fees.`
    },
    {
      id: 'use-restrictions',
      title: 'User Conduct and Restrictions',
      icon: <BlockIcon color="primary" />,
      content: `You agree not to use the Service to:\n* Upload, post, or transmit any content that violates YouTube\'s Terms of Service, Community Guidelines, or applicable laws (including copyright, trademark, privacy, or publicity rights).\n* Upload content that is hateful, defamatory, obscene, abusive, harassing, threatening, or otherwise objectionable.\n* Engage in any activity that interferes with or disrupts the Service or the servers/networks connected to it.\n* Attempt to circumvent any usage limits or restrictions associated with your subscription plan.\n* Use the Service for any illegal or unauthorized purpose.\n* Scrape, reverse-engineer, decompile, or otherwise attempt to derive the source code of the Service.\n* Resell, lease, or sublicense the Service or access to it.\n* Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity.`
    },
    {
      id: 'youtube-api-compliance',
      title: 'YouTube API Services and Compliance',
      icon: <ApiIcon color="primary" />,
      content: `Your use of the features relying on the YouTube API Services is subject to:\n* **Google/YouTube Terms:** The [YouTube Terms of Service](https://www.youtube.com/t/terms) and the [Google Privacy Policy](https://policies.google.com/privacy).\n* **OAuth Consent:** Your explicit authorization via Google OAuth, which grants us limited permission to act on your behalf.\n* **Revocation:** Your ability to revoke our access at any time via [your Google Account security settings](https://security.google.com/settings/security/permissions).\n* **Quota Responsibility:** **You are solely responsible for monitoring and managing the YouTube API quota consumed by your activities through the Service.** Exceeding YouTube\'s quota limits may result in temporary or permanent inability to use API-dependent features of our Service. We are not liable for suspensions or limitations imposed by YouTube due to your quota usage.`
    },
    {
      id: 'user-content',
      title: 'User Content',
      icon: <ContentPasteIcon color="primary" />,
      content: `* **Ownership:** You retain ownership of all intellectual property rights in the video content, thumbnails, titles, descriptions, tags, and other metadata ("User Content") that you upload or create using the Service.\n* **Responsibility:** **You are solely responsible for your User Content and the consequences of uploading it.** You represent and warrant that you have all necessary rights, licenses, and permissions to upload and publish your User Content and that it does not violate any third-party rights or YouTube\'s policies.\n* **License to Us:** By submitting User Content through the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, distribute, prepare derivative works of, display, and perform the User Content solely in connection with providing and operating the Service (e.g., processing it for upload to YouTube as you direct).`
    },
    {
      id: 'support-channels',
      title: 'AI Assistant & Live Chat Support',
      icon: <ChatIcon color="primary" />,
      content: `* **Availability:** The AI Assistant and Live Chat are provided as support channels. Availability is not guaranteed and may vary.\n* **AI Limitations:** The AI Assistant provides information based on its programming and data. It is not a substitute for professional advice, and we do not guarantee its accuracy or completeness. Your interactions may be logged for service improvement, subject to our Privacy Policy.\n* **Live Chat Recordings:** Live Chat conversations may be recorded for quality assurance and training purposes.\n* **Acceptable Use:** Do not misuse support channels. Be respectful and provide clear information.`
    },
    {
      id: 'api-access-terms',
      title: 'API Access (If Applicable)',
      icon: <ApiIcon color="primary" />,
      content: `If your subscription plan includes API access:\n* **License:** We grant you a limited, non-exclusive, non-transferable license to use the Service\'s API solely for your internal business purposes in accordance with the API documentation and usage limits.\n* **Restrictions:** You may not use the API in a way that abuses or circumvents the Service\'s limitations, violates these Terms, or infringes on any third-party rights.\n* **Revocation:** We reserve the right to limit or revoke API access at any time for violation of these terms or excessive usage.`
    },
    {
      id: 'intellectual-property',
      title: 'Our Intellectual Property',
      icon: <SecurityIcon color="primary" />,
      content: `The Service itself, including its software, design, text, graphics, logos, and underlying technology (excluding User Content), is the property of the service provider or its licensors and is protected by intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our Service or included software.`
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers of Warranties',
      icon: <WarningIcon color="primary" />,
      content: `The service is provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.\n\nWe do not guarantee that the service will always be safe, secure, uninterrupted, or error-free, or that it will always function without delays, disruptions, or imperfections.\n\nWe are not responsible for the actions or information of third parties (including YouTube) and you release us from any claims and damages, known and unknown, arising out of or in any way connected with any claim you have against any such third parties.`
    },
    {
      id: 'liability-limitation',
      title: 'Limitation of Liability',
      icon: <WarningIcon color="primary" />,
      content: `To the fullest extent permitted by applicable law, the individual provider of the Youtube MultiPost service and any affiliated parties or licensors will not be liable for any indirect, incidental, special, consequential, punitive, or multiple damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:

1.  Your use of the service or inability to use the service;
2.  Any unauthorized access to or use of our servers and/or any personal information stored therein;
3.  Any interruption or cessation of transmission to or from the service;
4.  Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our service by any third party;
5.  Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the service; and/or
6.  User content or the defamatory, offensive, or illegal conduct of any third party.

In no event shall our aggregate liability for all claims relating to the service exceed the greater of one hundred U.S. dollars (USD $100) or the amounts paid by you to us for the past three months of the services in question.`
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <CancelIcon color="primary" />,
      content: `* **By You:** You can terminate these Terms at any time by canceling your subscription and ceasing to use the Service.\n* **By Us:** We may suspend or terminate your account and access to the Service, at our sole discretion, at any time and for any reason, including if you violate these Terms. We will make reasonable efforts to notify you beforehand, but prior notice may not be possible in all circumstances. Upon termination, your right to use the Service will immediately cease.`
    },
    {
      id: 'changes-to-terms',
      title: 'Changes to Terms',
      icon: <UpdateIcon color="primary" />,
      content: `We may modify these Terms from time to time. If we make changes that we believe are material, we will notify you (e.g., via email or an in-app notification) at least 30 days before the changes take effect. By continuing to use the Service after the changes become effective, you agree to the revised Terms.`
    },
    {
      id: 'governing-law',
      title: 'Governing Law and Dispute Resolution',
      icon: <GavelIcon color="primary" />,
      content: `These Terms are governed by the laws of the Republic of Indonesia, without regard to conflict of law principles.\n\n**PLEASE READ THIS SECTION CAREFULLY – IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.**\n\nMost disputes can be resolved informally by contacting us at support@multipost.pro. If a dispute cannot be resolved informally, you agree to resolve any claim, dispute, or controversy (excluding claims for injunctive or other equitable relief) arising out of or in connection with or relating to these Terms by binding arbitration in Karawang, Indonesia. The arbitration will be conducted on a confidential basis. Each party will be responsible for paying any filing, administrative and arbitrator fees in accordance with the rules of the arbitration administrator. The award rendered by the arbitrator shall include costs of arbitration, reasonable attorneys\' fees and reasonable costs for expert and other witnesses. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction.\n\nYOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED OR REPRESENTATIVE ACTION.`
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: <EmailIcon color="primary" />,
      content: `If you have any questions about these Terms, please contact us at:\n\n**Email:** support@multipost.pro`
    }
  ];
  
  return (
    <Box 
      component="main" 
      sx={{ 
        minHeight: '100vh',
        pb: 10, 
        pt: { xs: 14, sm: 16, md: 18 } 
      }}
    >
      <SEO
        title="Terms of Service"
        description="Read MultiPost's Terms of Service. Free to start — understand your rights and responsibilities when using our free auto posting and video distribution platform."
        path="/terms"
      />
      {/* Header */}
      <Box 
        sx={{ 
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
          pt: 4,
          pb: 8,
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs 
            aria-label="breadcrumb" 
            sx={{ 
              mb: 4,
              '& .MuiBreadcrumbs-ol': {
                color: 'rgba(255, 255, 255, 0.7)'
              },
              '& .MuiBreadcrumbs-li a': {
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }
            }}
          >
            <MuiLink component={Link} to="/">
              Home
            </MuiLink>
            <Typography color="inherit">Terms of Service</Typography>
          </Breadcrumbs>
          
          <Typography 
            component={m.h1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            variant="h2" 
            fontWeight={700}
            gutterBottom
          >
            Terms of Service
          </Typography>
          
          <Typography 
            component={m.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variant="h6" 
            sx={{ 
              maxWidth: 700,
              mb: 2, 
              opacity: 0.9 
            }}
          >
            Please read these terms carefully before using our services.
          </Typography>
          
          <Typography 
            component={m.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variant="body1" 
            sx={{ opacity: 0.8 }}
          >
            Last Updated: {lastUpdated}
          </Typography>
        </Container>
      </Box>
      
      <Container 
        component={m.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        maxWidth="lg"
        sx={{ 
          mt: -4, 
          position: 'relative', 
          zIndex: 2 
        }}
      >
        <Paper 
          elevation={2} 
          sx={{ 
            borderRadius: 4, 
            p: { xs: 3, md: 5 },
            mb: 4,
          }}
        >
          {/* Quick Links */}
          <Box 
            sx={{ 
              mb: 6, 
              p: 3, 
              backgroundColor: 'rgba(0, 0, 0, 0.02)', 
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider'
            }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Quick Links
            </Typography>
            <Box 
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 2, 
                mt: 2 
              }}
            >
              <Button 
                component={Link} 
                to="/privacy" 
                variant="outlined" 
                size="small" 
                startIcon={<PolicyIcon />}
              >
                Privacy Policy
              </Button>
              <Button 
                component={Link} 
                to="/contact" 
                variant="outlined" 
                size="small" 
                startIcon={<EmailIcon />}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
          
          {/* Table of Contents */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Table of Contents
            </Typography>
            <Divider sx={{ my: 2 }} />
            <List dense disablePadding>
              {sections.map((section) => (
                <ListItem 
                  key={section.id} 
                  component="a" 
                  href={`#${section.id}`}
                  sx={{ 
                    py: 0.5,
                    textDecoration: 'none',
                    color: 'inherit',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.03)',
                    }
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    {section.icon}
                  </ListItemIcon>
                  <ListItemText primary={section.title} />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Policy Sections - Use ReactMarkdown */}
          {sections.map((section) => (
            <Box 
              key={section.id} 
              id={section.id} 
              sx={{ 
                scrollMarginTop: 100,
                mb: 6 
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ mr: 2 }}>
                  {section.icon}
                </Box>
                <Typography variant="h5" fontWeight={600}>
                  {section.title}
                </Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />
              <ReactMarkdown
                components={{
                  p: ({node, ...props}) => <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.8 }} {...props} />,
                  a: ({node, ...props}) => (
                    <MuiLink 
                      {...props} 
                      target="_blank"
                      rel="noopener noreferrer"
                sx={{ 
                        color: 'primary.main', 
                        textDecoration: 'underline', 
                        '&:hover': { color: 'primary.dark' }
                      }}
                    />
                  ),
                  ul: ({node, ...props}) => <ul style={{ paddingLeft: '24px', marginBottom: '16px' }} {...props} />,
                  ol: ({node, ...props}) => <ol style={{ paddingLeft: '24px', marginBottom: '16px' }} {...props} />,
                  li: ({node, ...props}) => <li style={{ marginBottom: '8px' }}><Typography component="span" variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }} {...props} /></li>,
                  strong: ({node, ...props}) => <Typography component="span" fontWeight="fontWeightBold" sx={{ color: 'text.primary' }} {...props} />,
                }}
              >
                {section.content}
              </ReactMarkdown>
            </Box>
          ))}
          
          {/* Agreement Box */}
          <Box 
            sx={{ 
              mt: 8, 
              p: 3, 
              backgroundColor: theme.palette.primary.light, 
              borderRadius: 2,
              color: theme.palette.primary.contrastText
            }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Your Agreement
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button 
                component="a"
                href="https://app.multipost.pro"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained" 
                color="secondary"
                sx={{ 
                  px: 4
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default TermsPage; 