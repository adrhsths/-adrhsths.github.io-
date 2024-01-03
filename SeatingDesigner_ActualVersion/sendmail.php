<?php
require_once 'vendor/autoload.php';

use MailchimpTransactional\ApiClient;

$mailchimp = new ApiClient();
$mailchimp->setApiKey('md-o76Dr5BoZLv6yLsxPjmZ-w');

$data = json_decode(file_get_contents('php://input'), true);
$recipientEmail = $data['recipientEmail'];
$productLink = $data['productLink'];

/* $message = [
    "from_email" => "info@sallux.mt",
    "template_content" => [[]],
    "to" => [
        [
            "email" => $recipientEmail,
            "type" => "to"
        ]
    ],
    "global_merge_vars" => [
        [
            "name" => "PRODUCTLINK",
            "content" => $productLink
        ]
    ],
    "template_name" => "Saving a Draft of Your Uniquely Configured Item", 
]; */

$message = [
    "from_email" => "info@sallux.mt",
    "subject" => "Welcome to Sallux - Let's get creative!",
    "to" => [["email" => $recipientEmail, "type" => "to"]],
    "merge_vars" => [
        ["rcpt" => $recipientEmail, "vars" => [
            ["name" => "PRODUCTLINK", "content" => $productLink]
        ]]
    ],
    "template_name" => "Saving a Draft of Your Uniquely Configured Item",
    "template_content" => []
];


try {
    $response = $mailchimp->messages->sendTemplate($message);
    echo json_encode(['success' => true, 'response' => $response]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}

?>
