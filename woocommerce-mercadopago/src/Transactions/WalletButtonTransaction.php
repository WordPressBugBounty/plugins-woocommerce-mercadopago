<?php

namespace MercadoPago\Woocommerce\Transactions;

use Exception;
use MercadoPago\Woocommerce\Gateways\AbstractGateway;
use MercadoPago\Woocommerce\Entities\Metadata\PaymentMetadata;
use WC_Order;

class WalletButtonTransaction extends AbstractPreferenceTransaction
{
    public const ID = 'wallet_button';

    /**
     * Wallet Button Transaction constructor
     *
     * @param AbstractGateway $gateway
     * @param WC_Order $order
     *
     * @throws Exception
     */
    public function __construct(AbstractGateway $gateway, WC_Order $order)
    {
        parent::__construct($gateway, $order);

        $this->transaction->auto_return = null;
        $this->transaction->purpose = 'wallet_purchase';
    }

    /**
     * Bind to parent getInternalMetadata method to be able to mock it on tests
     * @return PaymentMetadata
     */
    protected function getInternalMetadataStoreAndSellerInfo(): PaymentMetadata
    {
        return parent::getInternalMetadata();
    }

    /**
     * Get internal metadata
     *
     * @return PaymentMetadata
     */
    public function getInternalMetadata(): PaymentMetadata
    {
        $internalMetadata = $this->getInternalMetadataStoreAndSellerInfo();

        $internalMetadata->checkout      = 'pro';
        $internalMetadata->checkout_type = self::ID;

        return $internalMetadata;
    }
}
